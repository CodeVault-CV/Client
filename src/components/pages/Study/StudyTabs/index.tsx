import { Flag, Settings } from "@mui/icons-material";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import useStudy from "../../../../hooks/Study/useStudy";
import SessionGrid from "../SessionGrid";
import StudySetting from "../StudySetting";

type StudyTabsProps = {
  studyId: string;
};

export default function StudyTabs({ studyId }: StudyTabsProps) {
  const { isLeader } = useStudy(studyId as string);
  const [tab, setTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <>
      <Tabs
        value={isLeader ? tab : 0}
        onChange={handleChange}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          height: 0,
          alignItems: "center",
        }}
      >
        <Tab icon={<Flag />} iconPosition="start" label="Sessions" />
        {isLeader && <Tab icon={<Settings />} iconPosition="start" label="Settings" />}
      </Tabs>
      {!tab || !isLeader ? <SessionGrid studyId={studyId} /> : <StudySetting studyId={studyId} />}
    </>
  );
}
