import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchTextField() {
  return (
    <TextField
      id='input-with-icon-textfield'
      placeholder='Search'
      size='small'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
