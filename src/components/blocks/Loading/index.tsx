import { Box } from "@mui/material";
import cat from "../../../assets/Lazy_Cat_Spinning_cat_transparent_by_Icons8.gif";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        img: {
          width: "50%",
        },
      }}
    >
      <img src={cat} alt="loading..." />
    </Box>
  );
}
