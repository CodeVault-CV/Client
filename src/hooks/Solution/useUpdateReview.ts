import { useQueryClient, useMutation } from "@tanstack/react-query";
import ISolutionEntity from "../../core/entities/interfaces/iSolution";
import SolutionEntity from "../../core/entities/Solution";
import Solution from "../../di/Solution";

export default function useUpdateReview(solutionId: number) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ({ reviewId, content }: { reviewId: number; content: string }) =>
      Solution.updateReview(reviewId, content),
    {
      onSuccess: (updatedReview) => {
        const prevSolution = queryClient.getQueryData(["solution", solutionId]) as ISolutionEntity;
        const newSolution = new SolutionEntity(prevSolution);

        newSolution.pushReviews(
          prevSolution.reviews.map((review) => {
            if (review.id === updatedReview.id) {
              return updatedReview;
            }
            return review;
          })
        );
        queryClient.setQueryData(["solution", solutionId], newSolution);
      },
    }
  );

  return mutate;
}
