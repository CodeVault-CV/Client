import { useState, Fragment, ChangeEvent } from 'react';
import { TextField, Box, Stack, Typography } from '@mui/material';
import { IErrorMessage } from '.';
import Modal from '../../../Modal';
import Button from '../../../../atoms/Button';

interface CreateStudyButtonProps {
  studyName: string | null;
  repoName: string | null;
  errorMessage: IErrorMessage;
  handleSubmit: () => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function CreateStudyButtonBlock({
  studyName,
  repoName,
  errorMessage,
  handleSubmit,
  handleChange,
}: CreateStudyButtonProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    handleClose();
    handleSubmit();
  };

  const { studyNameMessage, repoNameMessage } = errorMessage;
  const disabled =
    studyName && repoName && !studyNameMessage && !repoNameMessage
      ? false : true;

  return (
    <Fragment>
      <Button
        variant='text'
        color='primary'
        onClick={handleOpen}
        sx={{ width: '100%' }}
      >
        스터디 생성
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Stack width={400} spacing={3}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h5'>스터디 생성</Typography>
          </Box>
          <TextField
            name='studyName'
            label='스터디 이름'
            variant='outlined'
            value={studyName}
            helperText={studyNameMessage}
            error={studyNameMessage ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            name='repoName'
            label='Git Repository 이름'
            variant='outlined'
            value={repoName}
            helperText={repoNameMessage}
            error={repoNameMessage ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              color='primary'
              variant='contained'
              onClick={handleClick}
              disabled={disabled}
            >
              완료
            </Button>
          </Box>
        </Stack>
      </Modal>
    </Fragment>
  );
}
