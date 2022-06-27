import React, { PropsWithChildren } from "react";
import { Container, Stack, CssBaseline } from "@mui/material";

import Navbar from "../../blocks/Navbar";

function PageTemplate({ children }: PropsWithChildren) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Stack>
                <Navbar />
                <Container maxWidth="md">
                    {children}
                </Container>
            </Stack>
        </React.Fragment>
    )
}

export default PageTemplate;