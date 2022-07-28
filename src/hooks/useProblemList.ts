import { useQuery } from "@tanstack/react-query";
import { getProblemList } from "../api";

export default function useProblemList(sessionId: number) {
  const { isLoading, isError, data } = useQuery(["problemList"], () =>
    getProblemList(sessionId).then((res) => res.data)
  );

  return {
    isLoading,
    isError,
    problemList: data,
  };
}
