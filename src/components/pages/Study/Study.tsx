import { Suspense } from "react";
import { Stack } from "@mui/material";

import StudyHeader from "./StudyHeader";
import StudyMiddleBar from "./StudyMiddleBar";
import SessionGrid from "./SessionGrid";
import SessionGridSkeleton from "./SessionGrid/SessionGridSkeleton";

interface StudyProps {
  studyId: string;
  study: {
    id: string;
    members: { id: string; name: string; imageUrl: string; githubUrl: string }[];
    name: string;
    url: string;
  };
}

export default function Study({ study, studyId }: StudyProps) {
  return (
    <Stack spacing={3}>
      <StudyHeader {...study} />
      <StudyMiddleBar studyId={studyId} />
      <Suspense fallback={<SessionGridSkeleton />}>
        <SessionGrid studyId={studyId} />
      </Suspense>
    </Stack>
  );
}
