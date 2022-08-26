import { Divider, Skeleton, Stack, Typography } from "@mui/material";
import Wrapper from "../Wrapper";

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

export default function Header({ label, content }: { label: string; content: string }) {
  return (
    <Stack spacing={2}>
      <Stack>
        <Typography variant="caption" color="text.secondary" ml={1} fontSize={18}>
          {label}
        </Typography>
        <Divider />
      </Stack>
      <Typography variant="h3" fontWeight={700}>
        {content}
      </Typography>
    </Stack>
  );
}
