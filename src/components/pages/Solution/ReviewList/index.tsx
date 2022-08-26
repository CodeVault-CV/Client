import { Stack } from "@mui/material";
import useSolution from "../../../../hooks/Solution/useSolution";
import ReviewCard from "./ReviewCard";

export default function ReviewListContainer({ solutionId }: { solutionId: number }) {
  const solution = useSolution(solutionId);

  return (
    <Stack spacing={2}>
      {solution &&
        solution.reviews.map((review) => (
          <ReviewCard key={review.id} solutionId={solutionId} review={review} />
        ))}
    </Stack>
  );
}
