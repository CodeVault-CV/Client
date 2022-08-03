import { useQuery } from "@tanstack/react-query";
import { getSessionList } from "../../api";
import Session from "../../types/Session";

export default function useSessionList(problemId: string) {
  const { isLoading, isError, data } = useQuery(["sessionList"], () =>
    getSessionList(problemId).then((res) => {
      const sessionList: Session[] = res.data;
      return sessionList.map(session => ({
        ...session,
        start: new Date(session.start),
        end: new Date(session.end),
      }))
    })
  );

  return {
    isLoading,
    isError,
    sessionList: data as Session[]
  };
}
