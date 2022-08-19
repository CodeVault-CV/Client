import { useState, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { Menu } from '@mui/material';
import { Settings, PersonAdd } from '@mui/icons-material';

import Button from '../../../../atoms/Button';
import UserSearchBar from './UserSearchBar';
import StudyDeleteModal from './StudyDeleteModal';
import IMemberEntity from '../../../../../core/entities/interfaces/iMember';

const MemberAdderWrapper = styled.div`
  padding: 10px 20px;
  width: 300px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

interface StudySettingProps {
  userName: string;
  searched: IMemberEntity[];
  handleChange: (value: string) => void;
  handleDelete: () => void;
  handleAddMember: () => void;
}

export default function StudySettingBlock({
  userName,
  searched,
  handleChange,
  handleDelete,
  handleAddMember,
}: StudySettingProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

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
          <UserSearchBar
            userName={userName}
            searched={searched}
            handleChange={handleChange}
          />
          <Button variant='contained' color='success' onClick={handleAddMember}>
            <PersonAdd sx={{ marginRight: '10px' }} />
            스터디원 초대
          </Button>
        </MemberAdderWrapper>
        <StudyDeleteModal handleDelete={handleDelete} />
      </Menu>
    </div>
  );
}
