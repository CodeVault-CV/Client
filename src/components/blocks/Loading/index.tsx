import { CircularProgress, Modal, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Modal open={true} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Stack>
        <CircularProgress color="inherit" size={48} />
      </Stack>
    </Modal>
  );
}
