import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export default function SessionGrid({ children }: PropsWithChildren) {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Stack direction="row" spacing={1}>
          <Typography variant="caption" color="text.secondary" ml={1} fontSize={18}>
            Sessions
          </Typography>
        </Stack>
        <Divider />
      </Box>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </Box>
  );
}
