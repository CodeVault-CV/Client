import { Chip, Box } from "@mui/material";
import Profile from "../../../blocks/Profile";
import Header from "../../../blocks/Header";

export default function SolutionHeader() {
    return (
        <Header 
            title="#17 - BFS & DFS" 
            endBlock={
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Profile name="woong-jae"/>
                </Box>
            }
        >
            <Chip label="22년 01월 02일 - 22년 01월 09일" variant="outlined" />
        </Header>
    )
}