import { Link as RouterLink } from "react-router-dom";
import { Box, Toolbar, Typography, Button, Container } from "@mui/material";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import LoginButton from "./LoginButton";

interface NavProps {
  auth: boolean;
  logout(): void;
}

function Navbar({ auth, logout }: NavProps) {
  return (
    <Box sx={{ flexGrow: 1, borderBottom: 1, borderColor: "divider" }}>
      <Container maxWidth="lg" sx={{ px: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button component={RouterLink} to="/" color="inherit" sx={{ textTransform: "none" }}>
            <DeviceHubIcon />
            <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
              Algong
            </Typography>
          </Button>

          <Box sx={{ display: "flex" }}>
            {auth ? (
              <>
                <Button component={RouterLink} to="/study-list" color="inherit" size="large">
                  스터디
                </Button>
                <Button color="inherit" size="large" onClick={logout}>
                  로그아웃
                </Button>
              </>
            ) : (
              <LoginButton />
            )}
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}

export default Navbar;
