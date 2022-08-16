import { useQuery } from "@tanstack/react-query";
import Session from "../../di/Session";

export default function useSessionList(problemId: string) {
  const { isLoading, isError, data } = useQuery(
    ["sessionList", problemId],
    () =>
      Session.getSessionList(problemId).then((data) => {
        return data.reverse().map((session) => ({
          ...session,
          start: new Date(session.start),
          end: new Date(session.end),
        }));
      }),
    {
      retry: false,
      suspense: true,
    }
  );

  return {
    isLoading,
    isError,
    sessionList: data,
  };
}
