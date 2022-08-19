import { Suspense } from "react";
import { Stack } from "@mui/material";

import StudyHeader from "./StudyHeader";
import StudyMiddleBar from "./StudyMiddleBar";
import SessionGrid from "./SessionGrid";
import SessionGridSkeleton from "./SessionGrid/SessionGridSkeleton";
import { HeaderSkeleton } from "../../blocks/Header";

interface StudyProps {
  studyId: string;
}

export default function Study({ studyId }: StudyProps) {
  return (
    <Stack spacing={3}>
      <Suspense fallback={<HeaderSkeleton />}>
        <StudyHeader studyId={studyId} />
      </Suspense>
      <StudyMiddleBar studyId={studyId} />
      <Suspense fallback={<SessionGridSkeleton />}>
        <SessionGrid studyId={studyId} />
      </Suspense>
    </Stack>
  );
}
