import { useState, Fragment, Dispatch, SetStateAction } from 'react';

import styled from '@emotion/styled';
import { TextField, Button, Modal } from '@mui/material';

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

interface CreateStudyButtonProps {
  setRepoName: Dispatch<SetStateAction<string | null>>;
  setStudyName: Dispatch<SetStateAction<string | null>>;
  handleClick: () => void;
}

export default function CreateStudyButtonBlock({
  setRepoName,
  setStudyName,
  handleClick,
}: CreateStudyButtonProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <Button onClick={handleOpen} sx={{ width: '100%' }}>
        스터디 생성
      </Button>
      <Modal open={open} onClose={handleClose}>
        <ModalWrapper>
          <CenterLayoutWrapper>
            <h2>스터디 생성</h2>
          </CenterLayoutWrapper>
          <TextField
            id='filled-basic'
            label='스터디 이름'
            variant='outlined'
            onChange={(e) => setStudyName(e.target.value)}
          />
          <TextField
            id='filled-basic'
            label='Git Repository 이름'
            variant='outlined'
            onChange={(e) => setRepoName(e.target.value)}
          />
          <CenterLayoutWrapper>
            <Button variant='contained' onClick={handleClick}>
              생성
            </Button>
          </CenterLayoutWrapper>
        </ModalWrapper>
      </Modal>
    </Fragment>
  );
}
