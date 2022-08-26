import { Box, Grid } from '@mui/material';
import ProblemCardList from './ProblemCardList';
import useSession from '../../../../hooks/Session/useSession';

type ProblemGridProps = {
  sessionId: number;
};

export default function ProblemGridContainer({ sessionId }: ProblemGridProps) {
  const { session } = useSession(sessionId);

  return (
    <Box>
      <Grid container spacing={3}>
        <ProblemCardList problems={session?.problems} />
      </Grid>
    </Box>
  );
}
