import { TextField, Popover, Stack, IconButton, Tooltip } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EditIcon from "@mui/icons-material/Edit";

import { useState, MouseEvent, ChangeEvent } from "react";
import Button from "../../../../atoms/Button";
import Wrapper from "../../../../blocks/Wrapper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSession } from "../../../../../api";

interface SessionAdderProps {
  id: number;
  name: string;
  start: Date;
  end: Date;
}

export default function SessionAdder({ id, name, start, end }: SessionAdderProps) {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (updatedSession: SessionAdderProps) => updateSession(updatedSession),
    {
      onSuccess: () => {
        queryClient.setQueryData(["session"], {
          id,
          name: title,
          start: startDate,
          end: endDate,
        });
      },
    }
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [title, setTitle] = useState(name);
  const [startDate, setStartDate] = useState<Date | null>(start);
  const [endDate, setEndDate] = useState<Date | null>(end);
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

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    if(startDate === null || endDate === null) return;
    mutation.mutate({
      id,
      name: title,
      start: startDate,
      end: endDate,
    });
    setAnchorEl(null);
    setTitle(title);
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <>
      <Tooltip title="세션 수정하기" arrow>
        <IconButton onClick={handleClick}>
          <EditIcon />
        </IconButton>
      </Tooltip>
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
            <Button color="success" onClick={handleSubmit} disabled={disabled}>
              완료
            </Button>
          </Stack>
        </Wrapper>
      </Popover>
    </>
  );
}
