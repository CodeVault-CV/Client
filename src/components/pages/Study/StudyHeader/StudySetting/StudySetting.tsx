import { useState, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { TextField, Menu, Stack, Box, Typography } from '@mui/material';
import { Settings, PersonAdd, Error } from '@mui/icons-material';

import Button from '../../../../atoms/Button';
import Modal from '../../../../blocks/Modal';

const MemberAdderWrapper = styled.div`
  padding: 20px;
  width: 300px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

interface StudySettingProps {
  handleDelete: () => void;
}

export default function StudySettingBlock({ handleDelete }: StudySettingProps) {
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    handleDelete();
    handleCloseModal();
  }

  return (
    <div>
      <Button variant='text' color='inherit' onClick={handleOpenMenu}>
        <Settings fontSize='large' />
      </Button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openMenu}
        onClose={handleCloseMenu}
      >
        <MemberAdderWrapper>
          <TextField label='Github Email' variant='outlined' size='small' />
          <Button variant='contained' color='success'>
            <PersonAdd sx={{ marginRight: '10px' }} />
            스터디원 초대
          </Button>
        </MemberAdderWrapper>
        <Button
          variant='text'
          color='error'
          sx={{ width: '100%' }}
          onClick={handleOpenModal}
        >
          스터디 삭제
        </Button>
      </Menu>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Stack width={400} spacing={3} alignItems='center'>
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
    </div>
  );
}
