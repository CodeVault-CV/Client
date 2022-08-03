import { Grid, Skeleton } from "@mui/material";

export default function ProblemListSkeleton() {
  return (
    <>
      <Grid item xs={12} md={6} alignItems="stretch">
        <Skeleton width="100%" height={200} />
      </Grid>
      <Grid item xs={12} md={6} alignItems="stretch">
        <Skeleton width="100%" height={200} />
      </Grid>
      <Grid item xs={12} md={6} alignItems="stretch">
        <Skeleton width="100%" height={200} />
      </Grid>
    </>
  );
}
