import { Stack } from "@mui/material";

import Wrapper from "../../blocks/Wrapper";
import SolutionHeader from "./SolutionHeader";
import SolutionForm from "./SolutionForm";

export default function Solution() {
    return (
        <Stack spacing={2}>
            <Wrapper>
                <SolutionHeader/>
            </Wrapper>
            <Wrapper>
                <SolutionForm/>
            </Wrapper>
        </Stack>
    )
}