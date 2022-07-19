import { useState, Fragment } from "react";
import { TextField, Modal } from "@mui/material";
import styled from "@emotion/styled";
import Button from "../../../../atoms/Button";

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 350px;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 8%) 2px 4px 12px;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1) 0s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

const CenterLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  & h2 {
    margin: 0;
  }
`;

export default function CreateStudyButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <Button variant="text" color="primary" onClick={handleOpen} sx={{ width: "100%" }}>
        스터디 생성
      </Button>
      <Modal open={open} onClose={handleClose}>
        <ModalWrapper>
          <CenterLayoutWrapper>
            <h2>스터디 생성</h2>
          </CenterLayoutWrapper>
          <TextField id="filled-basic" label="스터디 이름" variant="outlined" />
          <TextField id="filled-basic" label="Git Repository 이름" variant="outlined" />
          <CenterLayoutWrapper>
            <Button variant="text">생성</Button>
          </CenterLayoutWrapper>
        </ModalWrapper>
      </Modal>
    </Fragment>
  );
}
