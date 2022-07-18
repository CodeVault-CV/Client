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
  studies: IStudy[];
}

export default function StudyButton({ studies }: StudyListProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button size='large' sx={{ fontWeight: 800 }} onClick={handleClick}>
        스터디
      </Button>
      <Menu
        elevation={3}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {studies.length ? (
          studies.map((study) => (
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
