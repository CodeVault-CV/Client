import { Modal, Stack, Typography } from "@mui/material";
import cat from "../../../assets/Lazy_Cat_Spinning_cat_transparent_by_Icons8.gif";

export default function Loading() {
  return (
    <Modal open={true} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Stack
        sx={{
          img: {
            width: "50%",
            mx: "auto"
          },
        }}
      >
        <img src={cat} alt="loading..." />
        <Typography fontSize={24} fontWeight={800} textAlign="center">Loading...</Typography>
      </Stack>
    </Modal>
  );
}
