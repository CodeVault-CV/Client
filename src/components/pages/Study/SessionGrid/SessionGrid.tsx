import { Box, Grid } from "@mui/material";
import { PropsWithChildren } from "react";

export default function SessionGrid({ children }: PropsWithChildren) {
  return (
    <Box>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </Box>
  );
}
