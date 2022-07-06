import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Wrapper({ children }:PropsWithChildren) {
    return (
        <Box sx={{
            backgroundColor: "#f2f2f2",
            p: 3
        }}>
            {children}
        </Box>
    )
}