import { Box, TextField, Autocomplete } from '@mui/material';
import IMemberEntity from '../../../../../../core/entities/interfaces/iMember';

interface UserAutocompleteProps {
  userName: string;
  searched: IMemberEntity[];
  handleChange: (value: string) => void;
}

export default function UserAutocomplete({
  userName,
  searched,
  handleChange,
}: UserAutocompleteProps) {
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
          size='small'
          label='사용자 이름'
          value={userName}
          sx={{ width: 200 }}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
    />
  );
}
