import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import Navbar from "./Navbar";
import { useAuth } from "../../../hoc/AuthContext";
import { useColorMode } from "../../../hoc/ColorModeContext";

export default function NavbarContainer() {
  const theme = useTheme();
  const colorMode = useColorMode();
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <Navbar
      theme={theme}
      auth={auth}
      onThemeClick={colorMode.toggleColorMode}
      onLogoutClick={handleLogout}
    />
  );
}
