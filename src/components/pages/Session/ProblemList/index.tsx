import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";

import useProblemList from "../../../../hooks/useProblemList";
import ProblemEdit from "./ProblemEdit";
import ProblemItems from "./ProblemItems";
import ProblemListSkeleton from "./ProblemListSkeleton";

type ProblemListProps = {
  sessionId: number;
};

export default function ProblemListContainer({ sessionId }: ProblemListProps) {
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
          <ProblemListSkeleton />
        ) : editMode ? (
          <ProblemEdit sessionId={sessionId} problemList={problemList} toggleMode={toggleMode} />
        ) : (
          <ProblemItems problemList={problemList} toggleMode={toggleMode} />
        )}
      </Grid>
    </Box>
  );
}
