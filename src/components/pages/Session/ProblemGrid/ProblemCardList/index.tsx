import { Box, Typography } from "@mui/material";
import IProblemEntity from "../../../../../core/entities/interfaces/iProblem";
import ProblemCard from "./ProblemCard";

type ProblemCardListProps = {
  problems?: IProblemEntity[];
};

export default function ProblemCardList({ problems = [] }: ProblemCardListProps) {
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
    </>
  );
}
