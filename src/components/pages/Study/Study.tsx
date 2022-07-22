import { Stack } from "@mui/material";
import StudyHeader from "./StudyHeader";
import StudyMiddleBar from "./StudyMiddleBar";
import SessionGrid from "./SessionGrid";

interface StudyProps {
  study: {
    id: string;
    members: { id: string; name: string; imageUrl: string; githubUrl: string }[];
    name: string;
    url: string;
  };
  sessionList: {
    id: number;
    name: string;
    start: Date;
    end: Date;
  }[];
}

export default function Study({ study, sessionList }: StudyProps) {
  return (
    <Stack spacing={3}>
      <StudyHeader {...study} />
      <StudyMiddleBar />
      <SessionGrid sessionList={sessionList} />
    </Stack>
  );
}
