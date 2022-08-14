import { Suspense } from "react";
import { Stack } from "@mui/material";

import StudyHeader from "./StudyHeader";
import StudyMiddleBar from "./StudyMiddleBar";
import SessionGrid from "./SessionGrid";
import SessionGridSkeleton from "./SessionGrid/SessionGridSkeleton";

interface StudyProps {
  studyId: string;
}

export default function Study({ studyId }: StudyProps) {
  return (
    <Stack spacing={3}>
      <StudyHeader studyId={studyId} />
      <StudyMiddleBar studyId={studyId} />
      <Suspense fallback={<SessionGridSkeleton />}>
        <SessionGrid studyId={studyId} />
      </Suspense>
    </Stack>
  );
}
