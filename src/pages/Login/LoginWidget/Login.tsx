import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function LoginBlock() {
    return (
        <Box sx={{
            boxShadow: 2,
            borderRadius: 2,
            p: 3
        }}>
            <Stack spacing={3}>
                <Typography 
                    variant="h2" 
                    component="div" 
                    textAlign="center"
                    sx={{ fontWeight: "bold" }}   
                >Algong</Typography>
                <Divider />
                <Button 
                    href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`} 
                    color="success" 
                    variant="contained" 
                    size="large" 
                    startIcon={<GitHubIcon/>}
                >
                    깃허브로 로그인
                </Button>
            </Stack>
        </Box>
    )
}