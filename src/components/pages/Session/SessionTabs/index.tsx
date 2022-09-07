import { Code, Settings } from "@mui/icons-material";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import useStudy from "../../../../hooks/Study/useStudy";
import ProblemGrid from "../ProblemGrid";
import SessionSetting from "../SessionSetting";

type SessionTabsProps = {
  studyId: string;
  sessionId: number;
};

export default function SessionTabs({ studyId, sessionId }: SessionTabsProps) {
  const { isLeader } = useStudy(studyId);
  const [tab, setTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <>
      <Tabs
        value={tab}
        onChange={handleChange}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          height: 0,
          alignItems: "center",
        }}
      >
        <Tab icon={<Code />} iconPosition="start" label="문제" />
        {isLeader && <Tab icon={<Settings />} iconPosition="start" label="설정" />}
      </Tabs>
      {!tab ? (
        <ProblemGrid sessionId={sessionId} editable={isLeader} />
      ) : (
        <SessionSetting studyId={studyId} sessionId={sessionId} changeTab={() => setTab(0)} />
      )}
    </>
  );
}
