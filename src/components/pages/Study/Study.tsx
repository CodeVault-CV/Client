import { Suspense } from "react";
import { Stack } from "@mui/material";

import StudyHeader from "./StudyHeader";
import StudyTabs from "./StudyTabs";
import { HeaderSkeleton } from "../../blocks/Header";
import StudyTabsSkeleton from "./StudyTabs/StudyTabsSkeleton";

interface StudyProps {
  studyId: string;
}

export default function Study({ studyId }: StudyProps) {
  return (
    <Stack spacing={3}>
      <Suspense fallback={<HeaderSkeleton />}>
        <StudyHeader studyId={studyId} />
      </Suspense>
      <Suspense fallback={<StudyTabsSkeleton />}>
        <StudyTabs studyId={studyId} />
      </Suspense>
    </Stack>
  );
}
