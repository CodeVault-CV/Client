import { Box, Stack } from "@mui/material";

import ProblemAdder from "./ProblemAdder";
import Wrapper from "../../blocks/Wrapper";
import SessionHeader from "./SessionHeader";
import ProblemList from "./ProblemList";

interface SessionProps {
  sessionInfo: {
    name: string;
    start: string;
    end: string;
  };
  problemList: {
    id: number;
    number: string;
    name: string;
    platform: string;
  } [];
}

function Session({ sessionInfo, problemList }: SessionProps) {
  return (
    <Stack spacing={3}>
      <Wrapper>
        <SessionHeader {...sessionInfo} />
      </Wrapper>
      <Wrapper>
        <ProblemAdder />
      </Wrapper>
      <Box>
        <ProblemList problemList={problemList} />
      </Box>
    </Stack>
  );
}

export default Session;
