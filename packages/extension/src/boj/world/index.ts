import { eventEmitter } from "../../core/eventHub";
import { trackerEventType } from "../../core/tracker/interface";
import pusherInterceptor from "./interceptor/pusherInterceptor";

console.log("CodeVault running...");

const createBojTrackerEvent = (data: string) => {
  const { result, memory, time } = JSON.parse(data);

  switch (result) {
    case 3: // 채점 진행중
      return {
        type: trackerEventType.SCORE
      }
    case 4: // 채점 완료
      return {
        type: trackerEventType.SUCCESS,
        payload: {
          memory,
          time
        }
      }
    default: // 이외는 실패로 간주
      return {
        type: trackerEventType.FAIL
      }
  }
}

pusherInterceptor.addListener((data) => {
  // console.log(JSON.parse(data));
  eventEmitter.fromWorld({
    target: "GradeTracker",
    type: "Boj",
    payload: createBojTrackerEvent(data)
  });
});