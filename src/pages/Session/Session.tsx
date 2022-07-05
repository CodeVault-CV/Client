import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";

import ProblemAdder from "../../blocks/ProblemAdder";
import SessionHeader from "./SessionHeader";

const Item = styled(Box)`
    background-color: #f3f2f2;
    padding: 24px;
`

function Session() {
    return (
        <Stack spacing={3}>
            <Item>
                <SessionHeader />
            </Item>
            <Item>
                <ProblemAdder />
            </Item>
        </Stack>
    )
}

export default Session;