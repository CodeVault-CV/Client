import Navbar from "./Navbar";
import { useAuth } from "../../../hoc/AuthContext";
import { useTheme } from "@mui/material/styles";
import { useColorMode } from "../../../hoc/ColorModeContext";

export default function NavbarContainer() {
  const theme = useTheme();
  const colorMode = useColorMode();
  const { auth, logout } = useAuth();

  return (
    <Navbar
      theme={theme}
      toggleColorMode={colorMode.toggleColorMode}
      auth={auth}
      logout={logout}
    />
  );
}
