import React, { Suspense, useState } from 'react';
import { Stack, Tabs, Tab } from '@mui/material';
import { Flag, Settings } from '@mui/icons-material';

import StudyMiddleBar from './StudyMiddleBar';
import SessionGrid from './SessionGrid';
import SessionGridSkeleton from './SessionGrid/SessionGridSkeleton';
import StudySetting from './StudySetting';

interface StudyProps {
  studyId: string;
}

export default function Study({ studyId }: StudyProps) {
  const [tab, setTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Stack spacing={3}>
      <Tabs value={tab} onChange={handleChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tab icon={<Flag />} iconPosition='start' label='Sessions' />
        <Tab icon={<Settings />} iconPosition='start' label='Settings' />
      </Tabs>
      {!tab ? (
        <Suspense fallback={<SessionGridSkeleton />}>
          <StudyMiddleBar studyId={studyId} />
          <SessionGrid studyId={studyId} />
        </Suspense>
      ) : (
        <StudySetting studyId={studyId} />
      )}
    </Stack>
  );
}
