import IMemberEntity from '../../../../../../core/entities/interfaces/iMember';
import { TextField, Autocomplete, Box } from '@mui/material';

interface UserSearchBarProps {
  userName: string;
  searched: IMemberEntity[];
  handleChange: (value: string) => void;
}

export default function UserSearchBar({ userName, searched, handleChange }: UserSearchBarProps) {
  return (
    <Autocomplete
      freeSolo
      autoHighlight
      options={searched}
      getOptionLabel={(option) => 
        typeof option === 'string' ? option : option.name
      }
      onChange={(_, value: IMemberEntity | string | null) => {
        value 
          ? handleChange(typeof value === 'string' ? value : value.name) 
          : handleChange('');
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
