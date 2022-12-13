import createTracker from ".";
import timer from "../../utils/timer";

describe("Tracker 상태", () => {
  it("초기 상태로 PENDING을 가진다.", () => {
    const gradeTracker = createTracker();

    expect(gradeTracker.state).toBe("PENDING");
  })

  it("PENDING 상태에서 start 이벤트를 받으면 GRADING.PROCESSING 상태로 전이한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.send({ type: "start" });

    expect(gradeTracker.state).toBe("GRADING.PROCESSING");
  })

  it("GRADING.PROCESSING 상태에서 2초를 초과하면 GRADING.IDLE 상태로 전이한다.", async () => {
    const gradeTracker = createTracker();

    gradeTracker.send({ type: "start" });
    await timer(2200);

    expect(gradeTracker.state).toBe("GRADING.IDLE");
  });

  it("GRADING.IDLE 상태에서 2초를 초과하면 PENDING 상태로 전이한다.", async () => {
    const gradeTracker = createTracker();

    gradeTracker.send({ type: "start" });
    await timer(4200);

    expect(gradeTracker.state).toBe("PENDING");
  });

  it("GRADING.PROCESSING 상태에서 score 이벤트를 받으면 GRADING.PROCESSING 상태를 유지한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.send({ type: "start" });
    gradeTracker.send({
      type: "score",
      payload: {
        memory: 16.3,
        time: 120
      }
    });

    expect(gradeTracker.state).toBe("GRADING.PROCESSING");
  });

  it("GRADING.* 상태에서 fail 이벤트를 받으면 PENDING 상태로 전이한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.send({ type: "start" });
    gradeTracker.send({ type: "fail" });

    expect(gradeTracker.state).toBe("PENDING");
  });

  it("GRADING 상태에서 success 이벤트를 받으면 DONE 상태로 전이한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.send({ type: "start" });
    gradeTracker.send({ type: "success" });

    expect(gradeTracker.state).toBe("DONE");
  });

  it("DONE 상태에서 1초후 PENDING 상태로 전이한다.", async () => {
    const gradeTracker = createTracker();

    gradeTracker.send({ type: "start" });
    gradeTracker.send({ type: "success" });

    await timer(1100);

    expect(gradeTracker.state).toBe("PENDING");
  });
});

describe("Tracker 이벤트", () => {
  const startContext = {
    platform: "programmers", problemId: "1234", code: "function solution() {}"
  }

  it("start 이벤트와 함께 platform, problemId, code를 받아 context에 저장한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.send({
      type: "start",
      payload: { ...startContext }
    });

    const { platform, problemId, code } = gradeTracker.context;
    expect(platform).toBe(startContext.platform);
    expect(problemId).toBe(startContext.problemId);
    expect(code).toBe(startContext.code);
  });

  it("score 이벤트와 함께 memory와 time의 최댓값을 갱신한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.send({
      type: "start",
      payload: { ...startContext }
    });

    gradeTracker.send({
      type: "score",
      payload: {
        memory: 14.3,
        time: 130
      }
    })
    expect(gradeTracker.context.memory).toBe(14.3);
    expect(gradeTracker.context.time).toBe(130);

    gradeTracker.send({
      type: "score",
      payload: {
        memory: 16.3,
        time: 120
      }
    });
    expect(gradeTracker.context.memory).toBe(16.3);
    expect(gradeTracker.context.time).toBe(130);
  });

  it("fail 이벤트와 함께 context를 초기화한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.send({
      type: "start",
      payload: { ...startContext }
    });
    gradeTracker.send({
      type: "score",
      payload: {
        memory: 14.3,
        time: 130
      }
    })

    gradeTracker.send({
      type: "fail",
    });
    const { platform, problemId, code, memory, time } = gradeTracker.context;
    expect(platform).toBe("");
    expect(problemId).toBe("");
    expect(code).toBe("");
    expect(memory).toBe(-Infinity);
    expect(time).toBe(-Infinity);
  });

  it("success 이벤트와 함께 handleDone을 호출한다.", () => {
    const handleDone = jest.fn();
    const gradeTracker = createTracker(handleDone);

    gradeTracker.send({
      type: "start",
      payload: { ...startContext }
    });
    gradeTracker.send({
      type: "score",
      payload: {
        memory: 14.3,
        time: 130
      }
    });
    gradeTracker.send({ type: "success" });

    expect(handleDone).toHaveBeenCalled();
  });
});