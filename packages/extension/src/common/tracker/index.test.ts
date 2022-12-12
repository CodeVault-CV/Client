import createTracker from ".";
import timer from "../../utils/timer";

describe("Tracker 상태", () => {
  it("초기 상태로 PENDING을 가진다.", () => {
    const gradeTracker = createTracker();

    expect(gradeTracker.state).toBe("PENDING");
  })

  it("PENDING 상태에서 start 이벤트를 받으면 GRADING.PROCESSING 상태로 전이한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.transition({ type: "start" });

    expect(gradeTracker.state).toBe("GRADING.PROCESSING");
  })

  it("GRADING.PROCESSING 상태에서 2초를 초과하면 GRADING.IDLE 상태로 전이한다.", async () => {
    const gradeTracker = createTracker();

    gradeTracker.transition({ type: "start" });
    await timer(2200);

    expect(gradeTracker.state).toBe("GRADING.IDLE");
  });

  it("GRADING.IDLE 상태에서 2초를 초과하면 PENDING 상태로 전이한다.", async () => {
    const gradeTracker = createTracker();

    gradeTracker.transition({ type: "start" });
    await timer(4200);

    expect(gradeTracker.state).toBe("PENDING");
  });
  
  it("GRADING.PROCESSING 상태에서 score 이벤트를 받으면 GRADING.PROCESSING 상태를 유지한다.", () => {
    const gradeTracker = createTracker();
    
    gradeTracker.transition({ type: "start" });
    gradeTracker.transition({ type: "score" });
    
    expect(gradeTracker.state).toBe("GRADING.PROCESSING");
  });

  it("GRADING.* 상태에서 fail 이벤트를 받으면 PENDING 상태로 전이한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.transition({ type: "start" });
    gradeTracker.transition({ type: "fail" });

    expect(gradeTracker.state).toBe("PENDING");
  });

  it("GRADING 상태에서 success 이벤트를 받으면 DONE 상태로 전이한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.transition({ type: "start" });
    gradeTracker.transition({ type: "success" });

    expect(gradeTracker.state).toBe("DONE");
  });

  it("DONE 상태에서 1초후 PENDING 상태로 전이한다.", async () => {
    const gradeTracker = createTracker();

    gradeTracker.transition({ type: "start" });
    gradeTracker.transition({ type: "success" });

    await timer(1100);

    expect(gradeTracker.state).toBe("PENDING");
  });
})

