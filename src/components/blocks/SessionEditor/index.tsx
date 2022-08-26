import { Stack, TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ResponsiveStyleValue } from "@mui/system";

import { useState, ChangeEvent, MouseEvent } from "react";
import Button from "../../atoms/Button";

type SessionEditorProps = {
  name?: string;
  start?: Date;
  end?: Date;
  direction?: ResponsiveStyleValue<'column' | 'row'>
  handleSubmit(title: string, startDate: Date, endDate: Date): void;
};

type EditorDate = Date | null;

export default function SessionEditor({
  name = "",
  start = new Date(),
  end = new Date(),
  direction = 'column',
  handleSubmit,
}: SessionEditorProps) {
  const [title, setTitle] = useState<string>(name);
  const [startDate, setStartDate] = useState<EditorDate>(start);
  const [endDate, setEndDate] = useState<EditorDate>(end);
  const disabled = !Boolean(title && startDate && endDate);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const submitWrapper = (event: MouseEvent<HTMLButtonElement>) => {
    if (!title || !startDate || !endDate) return;
    endDate.setHours(23, 59, 59);
    handleSubmit(title, startDate, endDate);
    setTitle(name);
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <Stack direction={direction} spacing={2}>
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
  );
}
