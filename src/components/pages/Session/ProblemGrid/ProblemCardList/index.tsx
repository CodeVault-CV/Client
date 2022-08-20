import { Box, Grid, Typography } from "@mui/material";
import IProblemEntity from "../../../../../core/entities/interfaces/iProblem";

import Button from "../../../../atoms/Button";
import ProblemCard from "./ProblemCard";
import useStudyLeader from "../../../../../hooks/Study/useStudyLeader";

type ProblemCardListProps = {
  problems?: IProblemEntity[];
  toggleMode: () => void;
};

export default function ProblemCardList({ problems = [], toggleMode }: ProblemCardListProps) {
  return (
    <>
      {problems.length ? (
        problems.map((problem) => <ProblemCard key={problem.id} problem={problem} />)
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "100%",
            height: 200,
          }}
        >
          <Typography fontSize={24} fontWeight={600}>
            스터디장님! 문제를 추가해주세요
          </Typography>
        </Box>
      )}
      {useStudyLeader() && (
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={toggleMode}>편집하기</Button>
          </Box>
        </Grid>
      )}
    </>
  );
}
