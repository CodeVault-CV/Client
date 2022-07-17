import { Stack } from "@mui/material";

import ProblemAdder from "./ProblemAdder";
import Wrapper from "../../blocks/Wrapper";
import SessionHeader from "./SessionHeader";

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
    </Stack>
  );
}

export default Session;
