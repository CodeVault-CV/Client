import { Box, Grid, Stack, Typography } from "@mui/material";

import Button from "../../../atoms/Button";
import LinearProgressWithLabel from "../../../blocks/LinearProgressWithLabel";
import Wrapper from "../../../blocks/Wrapper";
import ProblemLabel from "../ProblemLabel";

export default function ProblemCard() {
  return (
    <Grid item xs={12} sm={6}>
      <Wrapper>
        <Stack spacing={1}>
          <ProblemLabel platform="Programmers" />
          <Typography variant="h5" fontWeight={700}>
            사라지는 발판
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 1, height: "fit-content" }}>
              <LinearProgressWithLabel value={75} sx={{ height: 6, borderRadius: 3 }} />
            </Box>
            <Button sx={{ ml: 3 }}>
              해결하기
            </Button>
          </Box>
        </Stack>
      </Wrapper>
    </Grid>
  );
}
