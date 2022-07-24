import { Box, Typography } from "@mui/material";
import cat from "../../../assets/Lazy_Cat_with_fishes_transparent_by_Icons8.gif";
export default function Loading() {
  return (
    <Box
      py={7}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        img: {
          width: "50%",
        },
      }}
    >
      <Typography variant="h3">404: page not found...</Typography>
      <img src={cat} alt="loading..." />
    </Box>
  );
}
