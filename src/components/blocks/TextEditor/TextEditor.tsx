import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Visibility";

import MarkdownViewer from "../MarkdownViewer";

interface TextEditorProps {
  value: string;
  view: string;
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  changeView(event: React.MouseEvent<HTMLElement>, newView: string): void;
}

export default function TextEditor({ value, view, handleChange, changeView }: TextEditorProps) {
  return (
    <Stack spacing={1}>
      <ToggleButtonGroup value={view} exclusive onChange={changeView} size="small">
        <ToggleButton value="edit">
          <EditIcon />
        </ToggleButton>
        <ToggleButton value="preview">
          <PreviewIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <MarkdownViewer value={value} handleChange={handleChange} preview={view === "preview"} />
    </Stack>
  );
}
