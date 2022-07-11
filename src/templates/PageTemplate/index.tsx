import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Stack, CssBaseline } from "@mui/material";

import Navbar from "../../components/Navbar";

function PageTemplate() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Stack>
                <Navbar />
                <Container maxWidth="md">
                    <Outlet />
                </Container>
            </Stack>
        </React.Fragment>
    )
}

export default PageTemplate;