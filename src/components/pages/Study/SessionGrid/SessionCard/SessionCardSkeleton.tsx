import { Grid, Stack, Skeleton, Typography } from "@mui/material";
import Wrapper from "../../../../blocks/Wrapper";

export default function SessionCardSkeleton() {
  return (
    <Grid item md={3} xs={6}>
      <Wrapper>
        <Stack spacing={1}>
          <Skeleton>
            <Typography variant="h4">Loading</Typography>
          </Skeleton>
          <Skeleton variant="text" />
        </Stack>
      </Wrapper>
    </Grid>
  );
}
