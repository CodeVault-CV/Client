import { Box, Stack } from "@mui/material";

import ProblemAdder from "./ProblemAdder";
import Wrapper from "../../blocks/Wrapper";
import SessionHeader from "./SessionHeader";
import ProblemList from "./ProblemList";

interface SessionProps {
  sessionInfo: {
    name: string;
    start: Date;
    end: Date;
  };
}

function Session({ sessionInfo }: SessionProps) {
  return (
    <Stack spacing={3}>
      <Wrapper>
        <SessionHeader {...sessionInfo} />
      </Wrapper>
      <Wrapper>
        <ProblemAdder />
      </Wrapper>
      <Box>
        <ProblemList />
      </Box>
    </Stack>
  );
}

export default Session;
