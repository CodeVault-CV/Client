import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchTextField = styled(TextField)`
  background-color: white;
`;

export default function SearchTextFieldBlock() {
  return (
    <SearchTextField
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
