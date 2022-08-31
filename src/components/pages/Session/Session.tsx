import { Suspense } from "react";
import { Stack } from "@mui/material";

import SessionHeader from "./SessionHeader";
import { HeaderSkeleton } from "../../blocks/Header";
import SessionTabs from "./SessionTabs";
import SessionTabsSkeleton from "./SessionTabs/SessionTabsSkeleton";

type SessionProps = {
  studyId: string;
  sessionId: number;
};

export default function Session({ studyId, sessionId }: SessionProps) {
  return (
    <Stack spacing={3}>
      <Suspense fallback={<HeaderSkeleton />}>
        <SessionHeader sessionId={sessionId} />
      </Suspense>
      <Suspense fallback={<SessionTabsSkeleton />}>
        <SessionTabs studyId={studyId} sessionId={sessionId} />
      </Suspense>
    </Stack>
  );
}
