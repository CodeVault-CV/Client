import { MouseEvent } from "react";
import { Grid, Box, IconButton, Stack, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import Problem from "../../../../../../core/types/Problem";
import Wrapper from "../../../../../blocks/Wrapper";
import ProblemLabel from "../../ProblemLabel";

export default function ProblemEditCard({
  name,
  number,
  platform,
  onClick,
}: Problem & {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Wrapper position="relative">
        <Box sx={{ position: "absolute", right: 0, top: 0 }}>
          <IconButton color="error" onClick={onClick}>
            <CancelIcon />
          </IconButton>
        </Box>
        <Stack spacing={1.5}>
          <Stack direction="row" spacing={1}>
            <ProblemLabel platform={platform} />
            <Box
              sx={{
                width: "fit-content",
                px: 1.5,
                py: 0.5,
                fontSize: 12,
                fontWeight: 600,
                borderRadius: 6,
                backgroundColor: "#303030",
                color: "whitesmoke"
              }}
            >
              {number}
            </Box>
          </Stack>
          <Typography fontSize={18} fontWeight={700}>{name}</Typography>
        </Stack>
      </Wrapper>
    </Grid>
  );
}