import { Code } from "@mui/icons-material";
import { Tabs, Tab } from "@mui/material";
import ProblemGridSkeleton from "../ProblemGrid/ProblemGridSkeleton";

export default function SessionTabsSkeleton() {
  return (
    <>
      <Tabs
        value={0}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          height: 0,
          alignItems: "center",
        }}
      >
        <Tab icon={<Code />} iconPosition="start" label="문제" />
      </Tabs>
      <ProblemGridSkeleton />
    </>
  );
}
