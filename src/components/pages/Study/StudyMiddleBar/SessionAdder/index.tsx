import styled from '@emotion/styled';
import { TextField, Menu } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useState, MouseEvent } from 'react';
import Button from '../../../../atoms/Button';

const SessionAdderWrapper = styled.div`
  padding: 20px;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h3 {
    margin: 0;
  }
`;

export default function SessionAdder() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>
        세션 추가
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
        <SessionAdderWrapper>
          <h3>#17</h3>
          <TextField label='제목' variant='outlined' size='small' />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='시작 날짜'
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
                setEndDate(null);
              }}
              renderInput={(params) => <TextField size='small' {...params} />}
            />
            <DatePicker
              label='종료 날짜'
              value={endDate}
              minDate={startDate}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
              renderInput={(params) => <TextField size='small' {...params} />}
            />
          </LocalizationProvider>
          <Button variant='contained'>완료</Button>
        </SessionAdderWrapper>
      </Menu>
    </>
  );
}
