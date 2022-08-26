import { Stack, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ResponsiveStyleValue } from '@mui/system';

import { useState, MouseEvent } from 'react';
import Button from '../../atoms/Button';

type SessionEditorProps = {
  name?: string;
  start?: Date;
  end?: Date;
  direction?: ResponsiveStyleValue<'column' | 'row'>;
  handleSubmit(title: string, startDate: Date, endDate: Date): void;
};

type EditorDate = Date | null;

type ValidationTarget = {
  newTitle?: string;
  newStart?: EditorDate;
  newEnd?: EditorDate;
};

export default function SessionEditor({
  name = '',
  start = new Date(),
  end = new Date(),
  direction = 'column',
  handleSubmit,
}: SessionEditorProps) {
  const [title, setTitle] = useState<string>(name);
  const [startDate, setStartDate] = useState<EditorDate>(start);
  const [endDate, setEndDate] = useState<EditorDate>(end);
  const [dateError, setDateError] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleValidation = ({
    newTitle = title,
    newStart = startDate,
    newEnd = endDate,
  }: ValidationTarget) => {
    setDisabled(
      dateError ||
      !Boolean(newTitle && newStart && newEnd) ||
      (name === newTitle && start === newStart && end === newEnd)
    );
  };

  const submitWrapper = (event: MouseEvent<HTMLButtonElement>) => {
    if (!title || !startDate || !endDate) return;
    endDate.setHours(23, 59, 59);
    handleSubmit(title, startDate, endDate);
    [name, start, end] = [title, startDate, endDate];
    handleValidation({});
  };

  return (
    <Stack direction={direction} spacing={2}>
      <TextField
        value={title}
        label='제목'
        variant='outlined'
        size='small'
        onChange={(event) => {
          setTitle(event.target.value);
          handleValidation({ newTitle: event.target.value });
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          disablePast
          label='시작 날짜'
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
            setEndDate(null);
            setDateError(false);
            handleValidation({ newStart: newValue });
          }}
          onError={() => {
            setDateError(true);
            handleValidation({});
          }}
          renderInput={(params) => <TextField size='small' {...params} />}
        />
        <DatePicker
          label='종료 날짜'
          value={endDate}
          minDate={startDate}
          onChange={(newValue) => {
            setEndDate(newValue);
            setDateError(false);
            handleValidation({ newEnd: newValue });
          }}
          onError={() => {
            setDateError(true);
            handleValidation({});
          }}
          renderInput={(params) => <TextField size='small' {...params} />}
        />
      </LocalizationProvider>
      <Button color='success' onClick={submitWrapper} disabled={disabled}>
        완료
      </Button>
    </Stack>
  );
}
