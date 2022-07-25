import { useState, MouseEvent, ChangeEvent } from "react";
import { TextField, Popover, Stack } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Button from "../../../../atoms/Button";
import Wrapper from "../../../../blocks/Wrapper";

export default function SessionAdder() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>세션 추가</Button>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <Wrapper>
          <Stack spacing={1}>
            <TextField label="제목" variant="outlined" size="small" onChange={handleChange} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="시작 날짜"
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                  setEndDate(null);
                }}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
              <DatePicker
                label="종료 날짜"
                value={endDate}
                minDate={startDate}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </LocalizationProvider>
            <Button>완료</Button>
          </Stack>
        </Wrapper>
      </Popover>
    </>
  );
}
