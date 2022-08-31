import { Grid, Stack, Skeleton, Typography } from "@mui/material";
import Wrapper from "../../../../blocks/Wrapper";

export default function SessionCardSkeleton() {
  return (
    <Grid item md={6} xs={12}>
      <Wrapper>
        <Stack spacing={1}>
          <Skeleton>
            <Typography variant="h4">Loading</Typography>
          </Skeleton>
          <Skeleton variant="text" sx={{ width: 120 }} />
          <Skeleton variant="rectangular" />
        </Stack>
      </Wrapper>
    </Grid>
  );
}
