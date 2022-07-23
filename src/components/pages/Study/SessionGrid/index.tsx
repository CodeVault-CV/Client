import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import formatDateLabel from "../../../../utils/formatDateLabel";
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
          <Chip label={formatDateLabel(new Date(start), new Date(end))} variant="outlined" />
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
