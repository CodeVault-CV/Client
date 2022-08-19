import { useQuery } from "@tanstack/react-query";
import Session from "../../di/Session";

export default function useProblemList(sessionId: number) {
  const {
    isLoading,
    isError,
    data = [],
  } = useQuery(["problemList", sessionId], () => Session.getProblemList(sessionId));

  return {
    isLoading,
    isError,
    problemList: data,
  };
}
