import { Box, Grid } from "@mui/material";
import ProblemCard from "../ProblemCard";

export default function ProblemList() {
  return (
    <Box>
      <Grid container spacing={3}>
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
      </Grid>
    </Box>
  );
}
