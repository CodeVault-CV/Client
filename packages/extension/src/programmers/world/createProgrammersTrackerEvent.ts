import { TrackerEvent, TrackerEventType } from '../../../core/Tracker/interface';

type BojData = {
  command?: string;
  message?: {
    type: string;
    passed: boolean;
    msg: string;
  };
  identifier?: string;
  data?: string;
};

type BojIdentifier = {
  lesson_id: number;
  language: string;
};

type BojCode = {
  codes: {
    [name: string]: string;
  };
};

const getEventType = (bojData: BojData) => {
  if (bojData?.command) return TrackerEventType.START;
  if (bojData?.message) {
    const { type, passed } = bojData.message;
    if (type === 'testcase') return TrackerEventType.SCORE;
    if (type === 'result_lesson_challenge') {
      return passed ? TrackerEventType.SUCCESS : TrackerEventType.FAIL;
    }
  }
  return null;
};

const messageRegex = /\d+\.?\d+/g;

const parseData = (bojData: BojData, eventType: TrackerEventType) => {
  if (eventType === TrackerEventType.START) {
    // 문제 아이디와 언어 추출
    if (bojData?.identifier === undefined) return null;
    const identifier = JSON.parse(bojData.identifier) as BojIdentifier;
    const { lesson_id: problemId, language } = identifier;

    // 코드 추출
    if (bojData?.data === undefined) return null;
    const { codes } = JSON.parse(bojData.data) as BojCode;
    const key = Object.keys(codes)[0];
    const code = codes[key];

    return {
      platform: 'programmers',
      problemId: problemId.toString(),
      code,
      language,
    };
  }

  if (eventType === TrackerEventType.SCORE) {
    if (bojData?.message === undefined) return null;
    const { passed, msg } = bojData.message;
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

const createProgrammersTrackerEvent = (data: string): TrackerEvent | null => {
  const bojData = JSON.parse(data) as BojData;

  const type = getEventType(bojData);
  if (type === null) return null;

  const payload = parseData(bojData, type);
  if (payload === null) return null;

  return {
    type,
    payload,
  };
};

export default createProgrammersTrackerEvent;
