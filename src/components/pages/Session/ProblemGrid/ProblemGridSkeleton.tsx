import { Box, Divider, Grid, Skeleton, Stack, Typography } from "@mui/material";

export default function ProblemGridSkeleton() {
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Stack direction="row" spacing={1}>
          <Typography variant="caption" color="text.secondary" ml={1} fontSize={18}>
            Problems
          </Typography>
        </Stack>
        <Divider />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} alignItems="stretch">
          <Skeleton width="100%" height={200} />
        </Grid>
        <Grid item xs={12} md={6} alignItems="stretch">
          <Skeleton width="100%" height={200} />
        </Grid>
        <Grid item xs={12} md={6} alignItems="stretch">
          <Skeleton width="100%" height={200} />
        </Grid>
      </Grid>
    </>
  );
}
