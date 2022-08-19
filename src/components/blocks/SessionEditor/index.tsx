import { useState, ChangeEvent, MouseEvent } from "react";
import { Tooltip, IconButton, Popover, Stack, TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import Button from "../../atoms/Button";
import Wrapper from "../../blocks/Wrapper";

type SessionEditorProps = {
  icon: JSX.Element;
  label: string;
  name?: string;
  start?: Date;
  end?: Date;
  handleSubmit(title: string, startDate: Date, endDate: Date): void;
};

type EditorDate = Date | null;

export default function SessionEditor({
  icon,
  label,
  name = "",
  start = new Date(),
  end = new Date(),
  handleSubmit,
}: SessionEditorProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [title, setTitle] = useState<string>(name);
  const [startDate, setStartDate] = useState<EditorDate>(start);
  const [endDate, setEndDate] = useState<EditorDate>(end);
  const open = Boolean(anchorEl);
  const disabled = !Boolean(title && startDate && endDate);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setTitle(name);
    setStartDate(start);
    setEndDate(end);
  };

  const submitWrapper = (event: MouseEvent<HTMLButtonElement>) => {
    if (!title || !startDate || !endDate) return;
    endDate.setHours(23, 59, 59);
    handleSubmit(title, startDate, endDate);
    setAnchorEl(null);
    setTitle(name);
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <>
      <Tooltip title={label} arrow>
        <IconButton onClick={handleClick}>{icon}</IconButton>
      </Tooltip>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
      >
        <Wrapper>
          <Stack spacing={2}>
            <TextField
              value={title}
              label="제목"
              variant="outlined"
              size="small"
              onChange={handleChange}
            />
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
            <Button color="success" onClick={submitWrapper} disabled={disabled}>
              완료
            </Button>
          </Stack>
        </Wrapper>
      </Popover>
    </>
  );
}
