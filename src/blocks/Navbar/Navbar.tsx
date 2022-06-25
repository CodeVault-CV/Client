import React from "react";

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface NavProps {
    auth: boolean
}

function Navbar({ auth }: NavProps) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        알공
                    </Typography>
                    {auth && <Button color="inherit">Studies</Button>}
                    <Button color="inherit">{auth ? "Logout" : "Login"}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;