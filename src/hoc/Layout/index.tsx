import { Outlet } from "react-router-dom";
import { Container, Stack, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { AuthProvider } from "../../hoc/AuthContext";
import Navbar from "../../components/blocks/Navbar";

const baseTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function Layout() {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Stack>
        <AuthProvider>
          <Navbar />
          <Container maxWidth="lg" sx={{ mt: 3 }}>
            <Outlet />
          </Container>
        </AuthProvider>
      </Stack>
    </ThemeProvider>
  );
}

export default Layout;
