import React, { useState } from "react";
import { Stack, Tabs, Tab } from "@mui/material";
import { Flag, Settings } from "@mui/icons-material";

import SessionGrid from "./SessionGrid";
import StudySetting from "./StudySetting";
import StudyHeader from "./StudyHeader";

interface StudyProps {
  studyId: string;
  isLeader: boolean;
}

export default function Study({ studyId, isLeader }: StudyProps) {
  const [tab, setTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Stack spacing={3}>
      <StudyHeader studyId={studyId} />
      <Tabs value={tab} onChange={handleChange} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tab icon={<Flag />} iconPosition="start" label="Sessions" />
        {isLeader && <Tab icon={<Settings />} iconPosition="start" label="Settings" />}
      </Tabs>
      {!tab ? (
        <>
          <SessionGrid studyId={studyId} />
        </>
      ) : (
        <StudySetting studyId={studyId} />
      )}
    </Stack>
  );
}
