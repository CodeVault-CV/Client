import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import SortButton from './SortButton';

const Wrapper = styled.div`
  margin-top: 30px;
  padding: 10px 30px;
  background-color: #f3f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchAndSortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
`

const SearchTextField = styled(TextField)`
  background-color: white;
`

export default function StudyInfoSearchBarBlock() {
  return (
    <Wrapper>
      <SearchAndSortWrapper>
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
        <SortButton />
      </SearchAndSortWrapper>
      <Button
        variant='outlined'
        color='inherit'
      >
        추가
      </Button>
    </Wrapper>
  );
}
