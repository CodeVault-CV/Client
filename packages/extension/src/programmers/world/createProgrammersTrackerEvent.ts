import { trackerEvent, trackerEventType } from '../../core/tracker/interface';

const getEventType = (json: any) => {
  if (json?.command) return trackerEventType.START;
  if (json?.message) {
    const { type, passed } = json.message;
    if (type === 'testcase') return trackerEventType.SCORE;
    if (type === 'result_lesson_challenge') {
      return passed ? trackerEventType.SUCCESS : trackerEventType.FAIL;
    }
  }
  return null;
};

const messageRegex = /\d+\.?\d+/g;

const parseData = (json: any, eventType: trackerEventType) => {
  if (eventType === trackerEventType.START) {
    const identifier = JSON.parse(json.identifier);
    const { lesson_id: problemId, language } = identifier;

    const { codes } = JSON.parse(json.data);
    const key = Object.keys(codes)[0];

    const code = codes[key];
    return {
      platform: 'programmers',
      problemId: problemId.toString(),
      code,
      language,
    };
  }

  if (eventType === trackerEventType.SCORE) {
    const { passed, msg } = json.message;
    if (passed) {
      const [timeMatch, memoryMatch] = msg.matchAll(messageRegex);

      return {
        time: parseFloat(timeMatch[0]),
        memory: parseFloat(memoryMatch[0]),
      };
    }

    return {
      time: 0,
      memory: 0,
    };
  }

  return {};
};

const createProgrammersTrackerEvent = (data: string): trackerEvent | null => {
  const json = JSON.parse(data);

  const type = getEventType(json);
  if (type === null) return null;

  return {
    type,
    payload: parseData(json, type),
  };
};

export default createProgrammersTrackerEvent;
