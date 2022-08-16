import { Box, Stack } from "@mui/material";

import SessionHeader from "./SessionHeader";
import ProblemGrid from "./ProblemGrid";

type SessionProps = {
  sessionId: number;
};

export default function Session({ sessionId }: SessionProps) {
  return (
    <Stack spacing={3}>
      <SessionHeader sessionId={sessionId} />
      <Box>
        <ProblemGrid sessionId={sessionId} />
      </Box>
    </Stack>
  );
}
