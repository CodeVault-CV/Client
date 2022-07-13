import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import CodeViewer from "../../../blocks/CodeViewer";
import TextEditor from "../../../components/TextEditor";

interface SolutionFormProps {
    view: string;
    handleChange(event: React.MouseEvent<HTMLElement>, newView: string): void;
}

export default function SolutionForm({ view, handleChange }: SolutionFormProps) {
    return (
        <Box>
            <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                <ToggleButtonGroup
                    value={view}
                    exclusive
                    onChange={handleChange}
                    size="small"
                >
                    <ToggleButton value="code">Code</ToggleButton>
                    <ToggleButton value="review">Review</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            {view === "code" ?
                <CodeViewer/>
                :
                <TextEditor/>
            }
        </Box>
    )
}