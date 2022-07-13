import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import CodeViewer from "../../../blocks/CodeViewer";
import TextEditor from "../../../components/TextEditor";

interface SolutionFormProps {
    code: string;
    review: string;
    view: string;
    changeCode(value: string): void;
    changeReview(event: React.ChangeEvent<HTMLInputElement>): void;
    changeView(event: React.MouseEvent<HTMLElement>, newView: string): void;
}

export default function SolutionForm({ 
    code,
    review, 
    view,
    changeCode, 
    changeReview, 
    changeView 
}: SolutionFormProps) {
    return (
        <Box>
            <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                <ToggleButtonGroup
                    value={view}
                    exclusive
                    onChange={changeView}
                    size="small"
                >
                    <ToggleButton value="code">Code</ToggleButton>
                    <ToggleButton value="review">Review</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            {view === "code" ?
                <CodeViewer value={code} handleChange={changeCode} />
                :
                <TextEditor value={review} handleChange={changeReview} />
            }
        </Box>
    )
}