import { Stack } from "@mui/material";
// import SearchTextField from "./SearchTextField";
import SortSplitButton from "./SortSplitButton";
import SessionAdder from "./SessionAdder";

type StudyMiddleBarProps = {
  studyId: string,
}

export default function StudyMiddleBar({ studyId }: StudyMiddleBarProps) {
  return (
    <Stack direction="row" spacing={2}>
      {/* <SearchTextField /> */}
      <SortSplitButton />
      <SessionAdder studyId={studyId} />
    </Stack>
  );
}
