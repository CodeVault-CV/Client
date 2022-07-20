import { Box, Grid } from "@mui/material";
import ProblemCard from "../ProblemCard";

interface ProblemListProps {
  problemList: {
    id: number;
    number: string;
    name: string;
    platform: string;
  }[];
}

export default function ProblemList({ problemList }: ProblemListProps) {
  return (
    <Box>
      <Grid container spacing={3}>
        {problemList.map((problem) => (
          <ProblemCard key={problem.id} {...problem} />
        ))}
      </Grid>
    </Box>
  );
}
