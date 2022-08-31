import { Flag } from "@mui/icons-material";
import { Tabs, Tab } from "@mui/material";
import SessionGridSkeleton from "../SessionGrid/SessionGridSkeleton";

export default function StudyTabsSkeleton() {
  return (
    <>
      <Tabs
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          height: 0,
          alignItems: "center",
        }}
      >
        <Tab icon={<Flag />} iconPosition="start" label="Sessions" />
      </Tabs>
      <SessionGridSkeleton />
    </>
  );
}
