import { Box, SxProps } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Wrapper({ children, ...sxProps }: PropsWithChildren<SxProps>) {
  return (
    <Box
      sx={{
        p: 3,
        border: 1,
        borderRadius: 1,
        borderColor: "divider",
        ...sxProps
      }}
    >
      {children}
    </Box>
  );
}
