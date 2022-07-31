import { Fragment } from 'react';
import { Stack, Button, IconButton, TextField } from '@mui/material';
import { Edit } from '@mui/icons-material';

interface StudyHeaderTitleProps {
  title: string;
  isTextFiled: boolean;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function StudyHeaderTitleBlock(props: StudyHeaderTitleProps) {
  const { title, isTextFiled, setTitle, handleClick } = props;
  return (
    <Fragment>
      {isTextFiled ? (
        <Stack direction='row'>
          <TextField
            size='small'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button
            variant='contained'
            color='success'
            sx={{ marginLeft: 1 }}
            onClick={handleClick}
          >
            저장
          </Button>
        </Stack>
      ) : (
        <Fragment>
          {title}
          <IconButton sx={{ marginLeft: 1 }} onClick={handleClick}>
            <Edit />
          </IconButton>
        </Fragment>
      )}
    </Fragment>
  );
}
