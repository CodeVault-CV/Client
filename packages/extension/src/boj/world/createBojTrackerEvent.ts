import { trackerEventType } from '../../core/tracker/interface';

type bojData = {
  result: number;
  memory: number;
  time: number;
};

const parseBojData = (data: string) => {
  return JSON.parse(data) as Partial<bojData>;
};

const createBojTrackerEvent = (data: string) => {
  const { result, memory, time } = parseBojData(data);

  switch (result) {
    case 3: // 채점 진행중
      return {
        type: trackerEventType.SCORE,
      };
    case 4: // 채점 완료
      return {
        type: trackerEventType.SUCCESS,
        payload: {
          memory,
          time,
        },
      };
    default: // 이외는 실패로 간주
      return {
        type: trackerEventType.FAIL,
      };
  }
};

export default createBojTrackerEvent;
