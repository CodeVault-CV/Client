import { Button, ButtonGroup, Chip } from "@mui/material";
import Header from "../../../components/Header";

export default function SessionHeader() {
    return (
        <Header title="#17 - BFS & DFS">
            <Chip label="22년 01월 02일 ~ 22년 01월 09일" sx={{ boxShadow: 1 }} />
            <ButtonGroup>
                <Button>수정</Button>
                <Button>삭제</Button>
            </ButtonGroup>
        </Header>
    )
}