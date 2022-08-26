import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Solution from "../../di/Solution";

export default function useCreateSolution(problemId: number) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(
    ({ code, review, language }: { code: string; review: string; language: string }) =>
      Solution.createSolution(problemId, code, review, language),
    {
      onSuccess: (newSolution) => {
        queryClient.setQueryData(["solution", newSolution.id], newSolution);
        navigate(`./../../solution/${newSolution.id}`, { replace: true });
      },
    }
  );

  return { isLoading, createSolution: mutate };
}
