import { Stack } from "@mui/material";
// import SearchTextField from "./SearchTextField";
import SortSplitButton from "./SortSplitButton";
import SessionAdder from "./SessionAdder";
import useStudyLeader from "../../../../hooks/Study/useStudyLeader";

type StudyMiddleBarProps = {
  studyId: string,
}

export default function StudyMiddleBar({ studyId }: StudyMiddleBarProps) {
  return (
    <Stack direction="row" spacing={2}>
      {/* <SearchTextField /> */}
      <SortSplitButton />
      {useStudyLeader() && <SessionAdder studyId={studyId} />}
    </Stack>
  );
}
