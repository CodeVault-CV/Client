import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";

import { Box, AppBar, Toolbar, Typography, Button, Link } from "@mui/material";

interface NavProps {
  auth: boolean;
}

const ButtonGroup = styled.div`
  display: flex;
`;


function Navbar({ auth }: NavProps) {
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

          <ButtonGroup>
            {auth && <Button color="inherit" size="large">스터디</Button>}
            <Button component={RouterLink} to="/login" color="inherit" size="large">
              {auth ? "로그아웃" : "로그인"}
            </Button>
          </ButtonGroup>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
