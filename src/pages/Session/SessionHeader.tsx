import { Box, Button, ButtonGroup, Chip, Stack, Typography } from "@mui/material";

export default function SessionHeader() {
    return (
        <Stack spacing={2}>
            <Typography variant="h3" component="h1">#17 - BFS & DFS</Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Chip label="22년 01월 02일 ~ 22년 01월 09일" sx={{ boxShadow: 1 }} />
                <ButtonGroup>
                    <Button>수정</Button>
                    <Button>삭제</Button>
                </ButtonGroup>
            </Box>
        </Stack>
    )
}