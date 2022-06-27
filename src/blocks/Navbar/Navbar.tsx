import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Box, AppBar, Toolbar, Typography, Button, Link } from "@mui/material";

interface NavProps {
  auth: boolean;
}

function Navbar({ auth }: NavProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" underline="none" sx={{ color: "white" }}>
            <Typography variant="h5" component="div">
              algong
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          {auth && <Button color="inherit" size="large">스터디</Button>}
          <Button component={RouterLink} to="/login" color="inherit" size="large">
            {auth ? "로그아웃" : "로그인"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
