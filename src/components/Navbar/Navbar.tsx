import { Link as RouterLink } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Button, Link } from "@mui/material";
import React from "react";

interface NavProps {
  auth: boolean;
  logout(): void;
}

function Navbar({ auth, logout }: NavProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        sx={{ boxShadow: 0 }}
      >
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>

          <Link href="/" underline="none" sx={{ color: "white" }}>
            <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
              Algong
            </Typography>
          </Link>

          <Box sx={{ display: "flex" }}>
            {auth ? 
              <React.Fragment>
                <Button color="inherit" size="large">스터디</Button>
                <Button color="inherit" size="large" onClick={logout}>로그아웃</Button>
              </React.Fragment>
            :
              <Button component={RouterLink} to="/login" color="inherit" size="large">로그인</Button>
            }
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
