import timer from '../../utils/timer';
import { TrackerEventType } from './interface/index';
import createTrackerFSM from './index';

function getTracker() {
  return createTrackerFSM();
}

describe('Tracker 상태', () => {
  it('초기 상태로 PENDING을 가진다.', () => {
    const gradeTracker = getTracker();

    expect(gradeTracker.state).toBe('PENDING');
  });

  it('PENDING 상태에서 START 이벤트를 받으면 GRADING.PROCESSING 상태로 전이한다.', () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: TrackerEventType.START });

    expect(gradeTracker.state).toBe('GRADING.PROCESSING');
  });

  it('GRADING.PROCESSING 상태에서 2초를 초과하면 GRADING.IDLE 상태로 전이한다.', async () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: TrackerEventType.START });
    await timer(2200);

    expect(gradeTracker.state).toBe('GRADING.IDLE');
  });

  it('GRADING.IDLE 상태에서 2초를 초과하면 PENDING 상태로 전이한다.', async () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: TrackerEventType.START });
    await timer(4200);

    expect(gradeTracker.state).toBe('PENDING');
  });

  it('GRADING.PROCESSING 상태에서 SCORE 이벤트를 받으면 GRADING.PROCESSING 상태를 유지한다.', () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: TrackerEventType.START });
    gradeTracker.send({
      type: TrackerEventType.SCORE,
      payload: {
        memory: 16.3,
        time: 120,
      },
    });

    expect(gradeTracker.state).toBe('GRADING.PROCESSING');
  });

  it('GRADING.* 상태에서 FAIL 이벤트를 받으면 PENDING 상태로 전이한다.', () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: TrackerEventType.START });
    gradeTracker.send({ type: TrackerEventType.FAIL });

    expect(gradeTracker.state).toBe('PENDING');
  });

  it('GRADING.* 상태에서 SUCCESS 이벤트를 받으면 DONE 상태로 전이한다.', async () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: TrackerEventType.START });
    await timer(2200);
    gradeTracker.send({ type: TrackerEventType.SUCCESS });

    expect(gradeTracker.state).toBe('DONE');
  });

  it('GRADING.* 상태에서 START 이벤트를 받으면 GRADING.PROCESSING 상태로 전이한다.', () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: TrackerEventType.START });
    gradeTracker.send({ type: TrackerEventType.START });

    expect(gradeTracker.state).toBe('GRADING.PROCESSING');
  });

  it('DONE 상태에서 2초 후 PENDING 상태로 전이한다.', async () => {
    const gradeTracker = getTracker();

    gradeTracker.send({ type: TrackerEventType.START });
    gradeTracker.send({ type: TrackerEventType.SUCCESS });

    await timer(2100);

    expect(gradeTracker.state).toBe('PENDING');
  });
});

describe('Tracker 이벤트', () => {
  const startContext = {
    platform: 'programmers',
    problemId: '1234',
    code: 'function solution() {}',
    language: 'javascript',
  };

  it('START 이벤트와 함께 platform, problemId, code, language를 받아 context에 저장한다.', () => {
    const gradeTracker = getTracker();

    gradeTracker.send({
      type: TrackerEventType.START,
      payload: { ...startContext },
    });

    const { platform, problemId, code, language } = gradeTracker.context;
    expect(platform).toBe(startContext.platform);
    expect(problemId).toBe(startContext.problemId);
    expect(code).toBe(startContext.code);
    expect(language).toBe(startContext.language);
  });

  it('SCORE 이벤트와 함께 memory와 time의 최댓값을 갱신한다.', () => {
    const gradeTracker = getTracker();

    gradeTracker.send({
      type: TrackerEventType.START,
      payload: { ...startContext },
    });

    gradeTracker.send({
      type: TrackerEventType.SCORE,
      payload: {
        memory: 14.3,
        time: 130,
      },
    });
    expect(gradeTracker.context.memory).toBe(14.3);
    expect(gradeTracker.context.time).toBe(130);

    gradeTracker.send({
      type: TrackerEventType.SCORE,
      payload: {
        memory: 16.3,
        time: 120,
      },
    });
    expect(gradeTracker.context.memory).toBe(16.3);
    expect(gradeTracker.context.time).toBe(130);
  });

  it('FAIL 이벤트와 함께 context를 초기화한다.', () => {
    const gradeTracker = getTracker();

    gradeTracker.send({
      type: TrackerEventType.START,
      payload: { ...startContext },
    });
    gradeTracker.send({
      type: TrackerEventType.SCORE,
      payload: {
        memory: 14.3,
        time: 130,
      },
    });

    gradeTracker.send({
      type: TrackerEventType.FAIL,
    });
    const { platform, problemId, code, memory, time } = gradeTracker.context;
    expect(platform).toBe('');
    expect(problemId).toBe('');
    expect(code).toBe('');
    expect(memory).toBe(-Infinity);
    expect(time).toBe(-Infinity);
  });
});
