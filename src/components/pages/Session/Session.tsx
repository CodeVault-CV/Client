import { Stack, Tabs, Tab } from "@mui/material";
import { Code, Settings } from "@mui/icons-material";

import ProblemGrid from "./ProblemGrid";
import SessionSetting from "./SessionSetting";
import React, { useState } from "react";
import SessionHeader from "./SessionHeader";

type SessionProps = {
  sessionId: number;
  isLeader: boolean;
};

export default function Session({ sessionId, isLeader }: SessionProps) {
  const [tab, setTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Stack spacing={3}>
      <SessionHeader sessionId={sessionId} />
      <Tabs value={tab} onChange={handleChange} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tab icon={<Code />} iconPosition="start" label="Problems" />
        {isLeader && <Tab icon={<Settings />} iconPosition="start" label="Settings" />}
      </Tabs>
      {!tab ? (
        <ProblemGrid sessionId={sessionId} />
      ) : (
        <SessionSetting sessionId={sessionId} changeTab={() => setTab(0)} />
      )}
    </Stack>
  );
}
