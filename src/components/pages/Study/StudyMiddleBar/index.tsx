import { Stack } from "@mui/material";
import SearchTextField from "./SearchTextField";
import SortSplitButton from "./SortSplitButton";
import SessionAdder from "./SessionAdder";

export default function StudyMiddleBar() {
  return (
    <Stack direction="row" spacing={2}>
      <SearchTextField />
      <SortSplitButton />
      <SessionAdder />
    </Stack>
  );
}
