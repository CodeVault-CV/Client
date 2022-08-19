import { Box, Stack } from "@mui/material";

import SessionHeader from "./SessionHeader";
import ProblemGrid from "./ProblemGrid";
import { Suspense } from "react";
import { HeaderSkeleton } from "../../blocks/Header";
import ProblemGridSkeleton from "./ProblemGrid/ProblemGridSkeleton";

type SessionProps = {
  sessionId: number;
};

export default function Session({ sessionId }: SessionProps) {
  return (
    <Stack spacing={3}>
      <Suspense fallback={<HeaderSkeleton />}>
        <SessionHeader sessionId={sessionId} />
      </Suspense>
      <Box>
        <Suspense fallback={<ProblemGridSkeleton />}>
          <ProblemGrid sessionId={sessionId} />
        </Suspense>
      </Box>
    </Stack>
  );
}
