import { Stack } from "@mui/material";

import ProblemAdder from "../../blocks/ProblemAdder";
import Wrapper from "../../blocks/Wrapper";
import ProblemList from "./ProblemList";
import SessionHeader from "./SessionHeader";

function Session() {
    return (
        <Stack spacing={3}>
            <Wrapper>
                <SessionHeader />
            </Wrapper>
            <Wrapper>
                <ProblemAdder />
            </Wrapper>
            <Wrapper>
                <ProblemList />
            </Wrapper>
        </Stack>
    )
}

export default Session;