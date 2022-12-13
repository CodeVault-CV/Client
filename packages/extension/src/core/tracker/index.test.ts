import timer from "../../utils/timer";
import { trackerEventType } from "./interface/index";
import createTrackerFSM from "./index";

function getTracker() {
  return createTrackerFSM();
}

describe("Tracker 상태", () => {
  it("초기 상태로 PENDING을 가진다.", () => {
    const gradeTracker = getTracker();

    expect(gradeTracker.state).toBe("PENDING");
  })

  it("PENDING 상태에서 START 이벤트를 받으면 GRADING.PROCESSING 상태로 전이한다.", () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: trackerEventType.START });

    expect(gradeTracker.state).toBe("GRADING.PROCESSING");
  })

  it("GRADING.PROCESSING 상태에서 2초를 초과하면 GRADING.IDLE 상태로 전이한다.", async () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: trackerEventType.START });
    await timer(2200);

    expect(gradeTracker.state).toBe("GRADING.IDLE");
  });

  it("GRADING.IDLE 상태에서 2초를 초과하면 PENDING 상태로 전이한다.", async () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: trackerEventType.START });
    await timer(4200);

    expect(gradeTracker.state).toBe("PENDING");
  });

  it("GRADING.PROCESSING 상태에서 SCORE 이벤트를 받으면 GRADING.PROCESSING 상태를 유지한다.", () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: trackerEventType.START });
    gradeTracker.send({
      type: trackerEventType.SCORE,
      payload: {
        memory: 16.3,
        time: 120
      }
    });

    expect(gradeTracker.state).toBe("GRADING.PROCESSING");
  });

  it("GRADING.* 상태에서 FAIL 이벤트를 받으면 PENDING 상태로 전이한다.", () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: trackerEventType.START });
    gradeTracker.send({ type: trackerEventType.FAIL });

    expect(gradeTracker.state).toBe("PENDING");
  });

  it("GRADING 상태에서 SUCCESS 이벤트를 받으면 DONE 상태로 전이한다.", () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: trackerEventType.START });
    gradeTracker.send({ type: trackerEventType.SUCCESS });

    expect(gradeTracker.state).toBe("DONE");
  });

  it("DONE 상태에서 1초후 PENDING 상태로 전이한다.", async () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: trackerEventType.START });
    gradeTracker.send({ type: trackerEventType.SUCCESS });

    await timer(1100);

    expect(gradeTracker.state).toBe("PENDING");
  });
});

describe("Tracker 이벤트", () => {
  const startContext = {
    platform: "programmers", problemId: "1234", code: "function solution() {}"
  }

  it("START 이벤트와 함께 platform, problemId, code를 받아 context에 저장한다.", () => {
    const gradeTracker = getTracker();

    gradeTracker.send({
      type: trackerEventType.START,
      payload: { ...startContext }
    });

    const { platform, problemId, code } = gradeTracker.context;
    expect(platform).toBe(startContext.platform);
    expect(problemId).toBe(startContext.problemId);
    expect(code).toBe(startContext.code);
  });

  it("SCORE 이벤트와 함께 memory와 time의 최댓값을 갱신한다.", () => {
    const gradeTracker = getTracker();

    gradeTracker.send({
      type: trackerEventType.START,
      payload: { ...startContext }
    });

    gradeTracker.send({
      type: trackerEventType.SCORE,
      payload: {
        memory: 14.3,
        time: 130
      }
    })
    expect(gradeTracker.context.memory).toBe(14.3);
    expect(gradeTracker.context.time).toBe(130);

    gradeTracker.send({
      type: trackerEventType.SCORE,
      payload: {
        memory: 16.3,
        time: 120
      }
    });
    expect(gradeTracker.context.memory).toBe(16.3);
    expect(gradeTracker.context.time).toBe(130);
  });

  it("FAIL 이벤트와 함께 context를 초기화한다.", () => {
    const gradeTracker = getTracker();

    gradeTracker.send({
      type: trackerEventType.START,
      payload: { ...startContext }
    });
    gradeTracker.send({
      type: trackerEventType.SCORE,
      payload: {
        memory: 14.3,
        time: 130
      }
    })

    gradeTracker.send({
      type: trackerEventType.FAIL,
    });
    const { platform, problemId, code, memory, time } = gradeTracker.context;
    expect(platform).toBe("");
    expect(problemId).toBe("");
    expect(code).toBe("");
    expect(memory).toBe(-Infinity);
    expect(time).toBe(-Infinity);
  });
});