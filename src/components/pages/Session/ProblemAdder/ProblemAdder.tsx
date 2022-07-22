import { Box, Modal } from "@mui/material";
import { useState } from "react";
import Button from "../../../atoms/Button";
import Wrapper from "../../../blocks/Wrapper";

export default function ProblemAdder() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>문제 추가하기</Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Wrapper>씨발</Wrapper>
        </Box>
      </Modal>
    </Box>
  );
}
