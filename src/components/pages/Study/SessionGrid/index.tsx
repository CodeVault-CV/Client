import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import useSessionList from "../../../../hooks/useSessionList";
import Session from "../../../../types/Session";
import Button from "../../../atoms/Button";
import DateLabel from "../../../atoms/DateLabel";
import Wrapper from "../../../blocks/Wrapper";

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

function SessionCard({ id, name, start, end }: Session) {
  return (
    <Grid item md={3} xs={6}>
      <Wrapper>
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={600}>
            {name}
          </Typography>
          <DateLabel start={new Date(start)} end={new Date(end)} />
          <Button>이동하기</Button>
        </Stack>
      </Wrapper>
    </Grid>
  );
}

type SessionGridProps = {
  studyId: string;
};

export default function SessionGrid({ studyId }: SessionGridProps) {
  const { isLoading, sessionList } = useSessionList(studyId);

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
