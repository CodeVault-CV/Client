import { Stack } from "@mui/material";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import SolutionViewer from "./SolutionViewer";

type SolutionProps = {
  solutionId: number;
};

export default function SolutionPage({ solutionId }: SolutionProps) {
  return (
    <Stack spacing={3}>
      <SolutionViewer solutionId={solutionId} />
      <ReviewList solutionId={solutionId} />
      <ReviewForm solutionId={solutionId} />
    </Stack>
  );
}
