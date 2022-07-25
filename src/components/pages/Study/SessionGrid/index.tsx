import { Box, Grid, Stack, Typography } from "@mui/material";
import DateLabel from "../../../atoms/DateLabel";
import Wrapper from "../../../blocks/Wrapper";

interface SessionProps {
  id: number;
  name: string;
  start: Date;
  end: Date;
}

function GridItem({ id, name, start, end }: SessionProps) {
  return (
    <Grid item md={3} xs={6}>
      <Wrapper>
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={600}>
            {name}
          </Typography>
          <DateLabel start={new Date(start)} end={new Date(end)} />
        </Stack>
      </Wrapper>
    </Grid>
  );
}

interface SessionGridProps {
  sessionList: SessionProps[];
}

export default function SessionGrid({ sessionList }: SessionGridProps) {
  return (
    <Box>
      <Grid container spacing={3}>
        {sessionList.map(({id, ...sessionProps}) => (
          <GridItem key={id} id={id} {...sessionProps} />
        ))}
      </Grid>
    </Box>
  );
}
