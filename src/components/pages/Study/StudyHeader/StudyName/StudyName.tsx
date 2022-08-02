import { Fragment } from 'react';
import { Stack, IconButton, TextField } from '@mui/material';
import { Edit, CheckCircle } from '@mui/icons-material';

interface StudyHeaderTitleProps {
  studyName: string;
  isTextFiled: boolean;
  errorMessage: string;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function StudyNameBlock({
  studyName,
  isTextFiled,
  errorMessage,
  handleClick,
  handleChange,
}: StudyHeaderTitleProps) {
  return (
    <Fragment>
      {isTextFiled ? (
        <Stack direction='row' spacing={1} alignItems='flex-start'>
          <TextField
            size='small'
            value={studyName}
            helperText={errorMessage}
            error={errorMessage ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <IconButton
            color='success'
            onClick={handleClick}
            disabled={errorMessage ? true : false}
          >
            <CheckCircle />
          </IconButton>
        </Stack>
      ) : (
        <Fragment>
          {studyName}
          <IconButton sx={{ marginLeft: 1 }} onClick={handleClick}>
            <Edit />
          </IconButton>
        </Fragment>
      )}
    </Fragment>
  );
}
