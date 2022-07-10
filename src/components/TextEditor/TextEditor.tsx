import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Visibility';

import MarkdownViewer from "../../blocks/MarkdownViewer";

interface TextEditorProps {
    view: string;
    handleChange(event: React.MouseEvent<HTMLElement>, newView: string): void;
}

export default function TextEditor({ view, handleChange }:TextEditorProps) {

    return (
        <Stack
            spacing={1}
        >
            <ToggleButtonGroup
                value={view}
                exclusive
                onChange={handleChange}
                size="small"
            >
                <ToggleButton value="edit">
                    <EditIcon/>
                </ToggleButton>
                <ToggleButton value="preview">
                    <PreviewIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
            <MarkdownViewer preview={view === "preview"} />
        </Stack>
    )
}