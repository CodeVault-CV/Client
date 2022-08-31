import { Outlet } from "react-router-dom";
import { Container, Stack, CssBaseline } from "@mui/material";

import { AuthProvider } from "../../hoc/AuthContext";
import Navbar from "../../components/blocks/Navbar";
import { ColorModeProvider } from "../ColorModeContext";
import Footer from "../../components/blocks/Footer";

function Layout() {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <AuthProvider>
        <Stack>
          <Navbar />
          <Container maxWidth="md" sx={{ my: 3 }}>
            <Outlet />
          </Container>
          <Footer />
        </Stack>
      </AuthProvider>
    </ColorModeProvider>
  );
}

export default Layout;
