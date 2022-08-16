import { Box, Grid } from "@mui/material";

import Problem from "../../../../../core/types/Problem";
import Button from "../../../../atoms/Button";
import ProblemCard from "./ProblemCard";

type ProblemCardListProps = {
  problemList: Problem[];
  toggleMode: () => void;
};

export default function ProblemCardList({ problemList, toggleMode }: ProblemCardListProps) {
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
