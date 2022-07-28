import { useQuery } from "@tanstack/react-query";
import { getSession } from "../api";
import Session from "../types/Session";

export default function useSession(sessionId: number) {
  const { isLoading, isError, data } = useQuery(["session"], () =>
    getSession(sessionId).then(({ data }) => ({
      ...data,
      start: new Date(data.start),
      end: new Date(data.end),
    }))
  );

  return {
    isLoading,
    isError,
    session: data as Session,
  };
}