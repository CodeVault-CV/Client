import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Wrapper from '../../../blocks/Wrapper';
import SearchTextField from './SearchTextField';
import SortSplitButton from './SortSplitButton';

const MiddleBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export default function StudyInfoMiddleBar() {
  return (
    <Wrapper>
      <MiddleBarWrapper>
        <SearchBarWrapper>
          <SearchTextField />
          <SortSplitButton />
        </SearchBarWrapper>
        <Button variant='outlined' color='inherit'>
          추가
        </Button>
      </MiddleBarWrapper>
    </Wrapper>
  );
}
