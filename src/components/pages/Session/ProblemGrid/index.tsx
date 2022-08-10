import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";

import useProblemList from "../../../../hooks/Problem/useProblemList";
import ProblemEdit from "./ProblemEdit";
import ProblemCardList from "./ProblemCardList";
import ProblemGridSkeleton from "./ProblemGridSkeleton";

type ProblemGridProps = {
  sessionId: number;
};

export default function ProblemGridContainer({ sessionId }: ProblemGridProps) {
  const { isLoading, problemList } = useProblemList(sessionId);
  const [editMode, setEditMode] = useState(false);

  const toggleMode = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Stack direction="row" spacing={1}>
          <Typography variant="caption" color="text.secondary" ml={1} fontSize={18}>
            Problem List
          </Typography>
        </Stack>
        <Divider />
      </Box>
      <Grid container spacing={3}>
        {isLoading ? (
          <ProblemGridSkeleton />
        ) : editMode ? (
          <ProblemEdit sessionId={sessionId} problemList={problemList} toggleMode={toggleMode} />
        ) : (
          <ProblemCardList problemList={problemList} toggleMode={toggleMode} />
        )}
      </Grid>
    </Box>
  );
}
