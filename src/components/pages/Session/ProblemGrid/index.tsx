import { useState } from "react";
import { Box, Grid, Stack } from "@mui/material";

import ProblemCardList from "./ProblemCardList";
import useSession from "../../../../hooks/Session/useSession";
import Button from "../../../atoms/Button";
import ProblemEdit from "./ProblemEdit";

type ProblemGridProps = {
  sessionId: number;
  editable: boolean;
};

export default function ProblemGridContainer({ sessionId, editable }: ProblemGridProps) {
  const { session } = useSession(sessionId);
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => setEdit((p) => !p);

  return (
    <Stack spacing={2}>
      {editable && (
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button onClick={toggleEdit}>문제 편집</Button>
        </Box>
      )}
      <Box>
        {edit ? (
          <ProblemEdit
            sessionId={sessionId}
            prevProblems={session?.problems}
            commitCallback={toggleEdit}
          />
        ) : (
          <Grid container spacing={3}>
            <ProblemCardList problems={session?.problems} />
          </Grid>
        )}
      </Box>
    </Stack>
  );
}
