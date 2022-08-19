import { Stack } from "@mui/material";
import SolutionViewer from "./SolutionViewer";

type SolutionProps = {
  solutionId: number;
};

export default function SolutionPage({ solutionId }: SolutionProps) {  
  return (
    <Stack spacing={2}>
      <SolutionViewer solutionId={solutionId} />
    </Stack>
  );
}
