import { MouseEvent } from "react";
import { Grid, Box, IconButton, Stack, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import Wrapper from "../../../../../blocks/Wrapper";
import ProblemLabel from "../../ProblemLabel";
import { IProblemData } from "../../../../../../core/entities/interfaces/iProblem";

export default function ProblemEditCard({
  name,
  number,
  platform,
  onClick,
}: Omit<IProblemData, "id" | "url"> & {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Grid item xs={12} md={6}>
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
                color: "whitesmoke",
              }}
            >
              {number}
            </Box>
          </Stack>
          <Typography fontSize={18} fontWeight={700}>
            {name}
          </Typography>
        </Stack>
      </Wrapper>
    </Grid>
  );
}
