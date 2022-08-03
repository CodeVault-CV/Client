import { Box, Stack } from "@mui/material";

import Wrapper from "../../blocks/Wrapper";
import SessionHeader from "./SessionHeader";
import ProblemList from "./ProblemList";

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
        <ProblemList sessionId={sessionId} />
      </Box>
    </Stack>
  );
}
