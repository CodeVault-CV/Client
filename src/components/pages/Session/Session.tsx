import { Box, Stack } from "@mui/material";

import Wrapper from "../../blocks/Wrapper";
import SessionHeader from "./SessionHeader";
import ProblemGrid from "./ProblemGrid";

type SessionProps = {
  sessionId: number,
}

export default function Session({ sessionId }: SessionProps) {
  return (
    <Stack spacing={3}>
      <Wrapper>
        <SessionHeader sessionId={sessionId} />
      </Wrapper>
      <Box>
        <ProblemGrid sessionId={sessionId} />
      </Box>
    </Stack>
  );
}
