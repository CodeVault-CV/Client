import createTracker from ".";

describe("Tracker 상태", () => {
  it("초기 상태로 IDLE을 가진다.", () => {
    const gradeTracker = createTracker();

    expect(gradeTracker.state).toBe("IDLE");
  })

  it("IDLE 상태에서 start 이벤트를 받으면 GRADING 상태로 전이한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.transition({ type: "start" });

    expect(gradeTracker.state).toBe("GRADING");
  })

  it("GRADING 상태에서 fail 이벤트를 받으면 IDLE 상태로 전이한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.transition({ type: "start" });
    gradeTracker.transition({ type: "fail" });

    expect(gradeTracker.state).toBe("IDLE");
  });

  it("GRADING 상태에서 score 이벤트를 받으면 GRADING 상태를 유지한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.transition({ type: "start" });
    gradeTracker.transition({ type: "score" });

    expect(gradeTracker.state).toBe("GRADING");
  });

  it("GRADING 상태에서 success 이벤트를 받으면 DONE 상태로 전이한다.", () => {
    const gradeTracker = createTracker();

    gradeTracker.transition({ type: "start" });
    gradeTracker.transition({ type: "success" });

    expect(gradeTracker.state).toBe("DONE");
  });

  it("DONE 상태에서 1초후 IDLE 상태로 전이한다.", async () => {
    const gradeTracker = createTracker();

    gradeTracker.transition({ type: "start" });
    gradeTracker.transition({ type: "success" });

    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 1100);
    });

    expect(gradeTracker.state).toBe("IDLE");
  });
})

