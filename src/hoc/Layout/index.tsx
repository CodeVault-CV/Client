import { Outlet } from "react-router-dom";
import { Container, Stack, CssBaseline } from "@mui/material";

import { AuthProvider } from "../../hoc/AuthContext";
import Navbar from "../../components/blocks/Navbar";
import { ColorModeProvider } from "../ColorModeContext";

function Layout() {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <Stack>
        <AuthProvider>
          <Navbar />
          <Container maxWidth="md" sx={{ my: 3 }}>
            <Outlet />
          </Container>
        </AuthProvider>
      </Stack>
    </ColorModeProvider>
  );
}

export default Layout;
