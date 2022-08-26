import { Box, Grid, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export default function SessionGrid({ children }: PropsWithChildren) {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Stack direction="row" spacing={1}>
        </Stack>
        {/* <Divider /> */}
      </Box>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </Box>
  );
}
