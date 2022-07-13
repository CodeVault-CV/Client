import styled from '@emotion/styled';
import { Button, TextField, Menu, MenuItem } from '@mui/material';
import { Settings, PersonAdd } from '@mui/icons-material';
import { useState, MouseEvent } from 'react';

const MemberAdderWrapper = styled.div`
  padding: 20px;
  width: 300px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

export default function StudySettingMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button color='inherit' onClick={handleClick}>
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
        open={open}
        onClose={handleClose}
      >
        <MemberAdderWrapper>
          <TextField
            label='Github Email'
            variant='outlined'
            size='small'
          />
          <Button variant='contained'>
            <PersonAdd sx={{ marginRight: '10px' }} />
            스터디원 초대
          </Button>
        </MemberAdderWrapper>
        <MenuItem sx={{ justifyContent: 'center', color: '#d32f2f' }}>
          스터디 탈퇴
        </MenuItem>
      </Menu>
    </div>
  );
}
