import { Stack } from "@mui/material";
// import SearchTextField from "./SearchTextField";
import SortSplitButton from "./SortSplitButton";
import SessionAdder from "./SessionAdder";
import useStudy from "../../../../hooks/Study/useStudy"

type StudyMiddleBarProps = {
  studyId: string,
}

export default function StudyMiddleBar({ studyId }: StudyMiddleBarProps) {
  const { isLeader } = useStudy(studyId);

  return (
    <Stack direction="row" spacing={2}>
      {/* <SearchTextField /> */}
      <SortSplitButton />
      {isLeader && <SessionAdder studyId={studyId} />}
    </Stack>
  );
}
