import { useState, Fragment, MouseEvent } from 'react';

import styled from '@emotion/styled';
import { Button, Menu, MenuItem, Divider } from '@mui/material';
import CreateStudyButton from './CreateStudyButton';
import { IStudy } from '..';

const AltTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  color: gray;
  font-size: 0.9em;
`;

interface StudyListProps {
  studys: IStudy[];
}

export default function StudyButton({ studys }: StudyListProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button color='inherit' size='large' onClick={handleClick}>
        스터디
      </Button>
      <Menu
        elevation={3}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {studys.length ? (
          studys.map((study) => (
            <MenuItem
              key={study.studyId}
              onClick={handleClose}
              sx={{ fontSize: '0.9em' }}
            >
              {study.name}
            </MenuItem>
          ))
        ) : (
          <AltTextWrapper>참여 중인 스터디가 없습니다</AltTextWrapper>
        )}
        <Divider />
        <CreateStudyButton />
      </Menu>
    </Fragment>
  );
}
