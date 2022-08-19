import IUserEntity from '../../../../../../core/entities/interfaces/iUser';
import { TextField, Autocomplete, Box } from '@mui/material';

interface UserSearchBarProps {
  userName: string;
  searched: IUserEntity[];
  handleChange: (value: string) => void;
}

export default function UserSearchBar({ userName, searched, handleChange }: UserSearchBarProps) {
  return (
    <Autocomplete
      autoHighlight
      options={searched}
      getOptionLabel={(option) => option.name}
      onChange={(_, option: IUserEntity | null) => {
        option ? handleChange(option.name) : handleChange('');
      }}
      renderOption={(props, option) => (
        <Box
          component='li'
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading='lazy'
            width='30'
            src={option.imageUrl}
            alt='Github Profile'
            style={{ borderRadius: '100%' }}
          />
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label='사용자 이름'
          variant='outlined'
          size='small'
          value={userName}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
    />
  );
}
