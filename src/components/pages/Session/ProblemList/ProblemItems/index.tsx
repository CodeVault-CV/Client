import { Box, Grid } from "@mui/material";

import Problem from "../../../../../types/Problem";
import Button from "../../../../atoms/Button";
import ProblemCard from "./ProblemCard";

type ProblemItemsProps = {
  problemList: Problem[];
  toggleMode: () => void;
};

export default function ProblemItems({ problemList, toggleMode }: ProblemItemsProps) {
  return (
    <>
      {problemList.map((problem: Problem) => (
        <ProblemCard key={problem.id} {...problem} />
      ))}
      <Grid item xs={12}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={toggleMode}>편집하기</Button>
        </Box>
      </Grid>
    </>
  );
}
