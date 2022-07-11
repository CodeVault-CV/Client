import { Box, Typography } from "@mui/material";

export default function Banner() {
    return (
        <Box sx={{
            width: "100%",
            height: 230,
            backgroundColor: "dimgray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Typography 
                variant="h1" 
                color="whitesmoke" 
                sx={{ fontWeight: 600 }} 
            >
            Algong
            </Typography>
            <Typography 
                variant="subtitle1" 
                component="div" 
                color="whitesmoke" 
                sx={{ fontWeight: 400 }}
            >
            Solve algorithm problems together
            </Typography>
        </Box>
    )
}