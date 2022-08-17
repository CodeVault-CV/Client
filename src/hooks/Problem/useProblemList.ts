import { useQuery } from "@tanstack/react-query";
import Problem from "../../di/Problem";

export default function useProblemList(sessionId: number) {
  const {
    isLoading,
    isError,
    data = [],
  } = useQuery(["problemList", sessionId], () => Problem.getProblemList(sessionId));

  return {
    isLoading,
    isError,
    problemList: data,
  };
}
