import { Box, Grid, Skeleton } from "@mui/material";

export default function ProblemGridSkeleton() {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Skeleton width="100%" height={200} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton width="100%" height={200} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton width="100%" height={200} />
        </Grid>
      </Grid>
    </Box>
  );
}
