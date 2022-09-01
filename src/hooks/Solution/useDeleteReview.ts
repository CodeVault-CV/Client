import { useQueryClient, useMutation } from "@tanstack/react-query";
import ISolutionEntity from "../../core/entities/interfaces/iSolution";
import SolutionEntity from "../../core/entities/Solution";
import Solution from "../../di/Solution";

export default function useDeleteReview(solutionId: number) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((reviewId: number) => Solution.deleteReview(reviewId), {
    onSuccess: (_, reviewId) => {
      const prevSolution = queryClient.getQueryData(["solution", solutionId]) as ISolutionEntity;
      const newSolution = new SolutionEntity(prevSolution);

      newSolution.pushReviews(prevSolution.reviews.filter(({ id }) => id !== reviewId));
      queryClient.setQueryData(["solution", solutionId], newSolution);
    },
  });

  return mutate;
}
