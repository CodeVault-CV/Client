import { Outlet } from "react-router-dom";
import { Container, Stack, CssBaseline } from "@mui/material";

import { AuthProvider } from "../../hoc/AuthContext";
import Navbar from "../../components/Navbar";

function PageTemplate() {
    return (
        <AuthProvider>
            <CssBaseline />
            <Stack>
                <Navbar />
                <Container maxWidth="md">
                    <Outlet />
                </Container>
            </Stack>
        </AuthProvider>
    )
}

export default PageTemplate;