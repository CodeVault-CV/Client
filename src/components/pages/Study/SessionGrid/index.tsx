import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import useSessionList from "../../../../hooks/Session/useSessionList";
import Wrapper from "../../../blocks/Wrapper";
import SessionCard from "./SessionCard";

function SessionSkelton() {
  return (
    <Grid item md={3} xs={6}>
      <Wrapper>
        <Stack spacing={1}>
          <Skeleton>
            <Typography variant="h4">Loading</Typography>
          </Skeleton>
          <Skeleton variant="text" />
        </Stack>
      </Wrapper>
    </Grid>
  );
}

type SessionGridProps = {
  studyId: string;
};

export default function SessionGrid({ studyId }: SessionGridProps) {
  const { isLoading, sessionList = [] } = useSessionList(studyId);

  return (
    <Box>
      <Grid container spacing={3}>
        {isLoading ? (
          <>
            <SessionSkelton />
            <SessionSkelton />
          </>
        ) : (
          sessionList.map(({ id, ...sessionProps }) => (
            <SessionCard key={id} id={id} {...sessionProps} />
          ))
        )}
      </Grid>
    </Box>
  );
}
