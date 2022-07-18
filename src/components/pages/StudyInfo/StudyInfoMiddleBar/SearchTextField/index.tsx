import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchWrapper = styled(TextField)`
  background-color: white;
`;

export default function SearchTextField() {
  return (
    <SearchWrapper
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
