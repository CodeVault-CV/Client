import { PropsWithChildren } from "react";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import Wrapper from "../Wrapper";

interface HeaderProps {
  title: any;
  endBlock?: React.ReactNode;
}

export function HeaderSkeleton() {
  return (
    <Wrapper>
      <Stack direction="column" spacing={2}>
        <Skeleton>
          <Typography variant="h3">Loading</Typography>
        </Skeleton>
        <Skeleton variant="rectangular" />
      </Stack>
    </Wrapper>
  );
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
