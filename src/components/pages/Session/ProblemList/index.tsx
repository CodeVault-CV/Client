import { Box, Grid, Skeleton } from "@mui/material";
import useProblemList from "../../../../hooks/useProblemList";
import Problem from "../../../../types/Problem";
import ProblemCard from "./ProblemCard";

type ProblemListProps = {
  sessionId: number;
};

export default function ProblemList({ sessionId }: ProblemListProps) {
  const { isLoading, problemList } = useProblemList(sessionId);

  return (
    <Box>
      <Grid container spacing={3}>
        {isLoading ? (
          <>
            <Grid item xs={12} md={6} alignItems="stretch">
              <Skeleton width="100%">
                <ProblemCard id={0} number={""} name={""} platform={""} />
              </Skeleton>
            </Grid>
            <Grid item xs={12} md={6} alignItems="stretch">
              <Skeleton width="100%">
                <ProblemCard id={0} number={""} name={""} platform={""} />
              </Skeleton>
            </Grid>
            <Grid item xs={12} md={6} alignItems="stretch">
              <Skeleton width="100%">
                <ProblemCard id={0} number={""} name={""} platform={""} />
              </Skeleton>
            </Grid>
          </>
        ) : (
          problemList.map((problem: Problem) => <ProblemCard key={problem.id} {...problem} />)
        )}
      </Grid>
    </Box>
  );
}
