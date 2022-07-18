import { PropsWithChildren } from "react";
import { Box, Stack, Typography } from "@mui/material";

interface HeaderProps {
  title: string;
  endBlock?: React.ReactNode;
}

export default function Header({ title, children, endBlock }: PropsWithChildren<HeaderProps>) {
  return (
    <Stack direction="row" pl={2}>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <Typography variant="h3" component="h1" fontWeight={800}>
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </Stack>
      {endBlock}
    </Stack>
  );
}
