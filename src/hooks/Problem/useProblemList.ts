import { useQuery } from "@tanstack/react-query";
import { getProblemList } from "../../api";
import Problem from "../../core/types/Problem";

export default function useProblemList(sessionId: number) {
  const { isLoading, isError, data = [] } = useQuery<Problem[]>(["problemList", sessionId], () =>
    getProblemList(sessionId).then((res) => res.data)
  );

  return {
    isLoading,
    isError,
    problemList: data,
  };
}
