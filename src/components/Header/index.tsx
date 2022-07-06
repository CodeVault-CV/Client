import GitHub from "@mui/icons-material/GitHub";
import { Box, Button, ButtonGroup, Chip, Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface HeaderProps {
    title: string,
    endBlock?: React.ReactNode
}

export default function Header({ title, children, endBlock }:PropsWithChildren<HeaderProps>) {
    return (
        <Stack direction="row">
            <Stack spacing={2} sx={{ flexGrow : 1 }}>
                <Typography variant="h3" component="h1">{title}</Typography>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    { children }
                </Box>
            </Stack>
            { endBlock }
        </Stack>
    )
}