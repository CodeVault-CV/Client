import styled from '@emotion/styled';
import Wrapper from '../../../blocks/Wrapper';
import SearchTextField from './SearchTextField';
import SortSplitButton from './SortSplitButton';
import SessionAdder from './SessionAdder';

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
        <SessionAdder />
      </MiddleBarWrapper>
    </Wrapper>
  );
}
