import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { Error } from '@mui/icons-material';

import Button from '../../../../../atoms/Button';
import Modal from '../../../../../blocks/Modal';

interface StudyDeleteModalProps {
  handleDelete: () => void;
}

export default function StudyDeleteModal({ handleDelete }: StudyDeleteModalProps) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleClick = () => {
    handleDelete();
    handleCloseModal();
  };

  return (
    <>
      <Button
        variant='text'
        color='error'
        sx={{ width: '100%' }}
        onClick={handleOpenModal}
      >
        스터디 삭제
      </Button>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Stack width={300} spacing={3} alignItems='center'>
          <Typography variant='h6' color='error'>
            <Stack direction='row' alignItems='center'>
              <Error sx={{ marginRight: 1 }} /> 스터디 삭제
            </Stack>
          </Typography>
          <Typography>스터디를 정말로 삭제하시겠습니까?</Typography>
          <Typography>삭제한 데이터는 복구할 수 없습니다.</Typography>
          <Button variant='contained' color='error' onClick={handleClick}>
            삭제
          </Button>
        </Stack>
      </Modal>
    </>
  );
}
