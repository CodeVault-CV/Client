import { useState, Fragment, ChangeEvent } from 'react';
import { TextField, Button, Modal, Box, Typography } from '@mui/material';
import { IName } from '.';
import { FamilyRestroomTwoTone } from '@mui/icons-material';

const ModalStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 350,
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 'rgb(0 0 0 / 8%) 2px 4px 12px',
  p: 4,
};

interface CreateStudyButtonProps {
  input: IName;
  errorMessage: IName;
  handleClick: () => void;
  handleChange: (target: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function CreateStudyButtonBlock({
  input,
  errorMessage,
  handleClick,
  handleChange,
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
        <Box sx={ModalStyle}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h5'>스터디 생성</Typography>
          </Box>
          <TextField
            name='studyName'
            label='스터디 이름'
            variant='outlined'
            value={input.studyName}
            helperText={errorMessage.studyName}
            error={errorMessage.studyName ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            name='repoName'
            label='Git Repository 이름'
            variant='outlined'
            value={input.repoName}
            helperText={errorMessage.repoName}
            error={errorMessage.repoName ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant='contained'
              onClick={handleClick}
              disabled={
                input.studyName &&
                input.repoName &&
                !errorMessage.studyName &&
                !errorMessage.repoName
                ? false : true
              }
            >
              완료
            </Button>
          </Box>
        </Box>
      </Modal>
    </Fragment>
  );
}
