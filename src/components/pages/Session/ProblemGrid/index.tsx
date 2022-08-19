import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";

import ProblemEdit from "./ProblemEdit";
import ProblemCardList from "./ProblemCardList";
import useSession from "../../../../hooks/Session/useSession";

type ProblemGridProps = {
  sessionId: number;
};

export default function ProblemGridContainer({ sessionId }: ProblemGridProps) {
  const { session } = useSession(sessionId);
  const [editMode, setEditMode] = useState(false);

  const toggleMode = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Stack direction="row" spacing={1}>
          <Typography variant="caption" color="text.secondary" ml={1} fontSize={18}>
            Problems
          </Typography>
        </Stack>
        <Divider />
      </Box>
      <Grid container spacing={3}>
        {editMode ? (
          <ProblemEdit
            sessionId={sessionId}
            prevProblems={session?.problems}
            toggleMode={toggleMode}
          />
        ) : (
          <ProblemCardList problems={session?.problems} toggleMode={toggleMode} />
        )}
      </Grid>
    </Box>
  );
}
