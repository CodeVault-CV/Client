import { Stack } from "@mui/material";

import ProblemAdder from "./ProblemAdder";
import Wrapper from "../../blocks/Wrapper";
import Problem from "./Problem";
import SessionHeader from "./SessionHeader";
import TextEditor from "../../components/TextEditor";

function Session() {
    return (
        <Stack spacing={3}>
            <Wrapper>
                <SessionHeader/>
            </Wrapper>
            <Wrapper>
                <ProblemAdder/>
            </Wrapper>
            <Wrapper>
                <Problem/>
            </Wrapper>
            <Wrapper>
                <TextEditor preview={true}/>
            </Wrapper>
        </Stack>
    )
}

export default Session;