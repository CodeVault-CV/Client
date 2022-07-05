import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

import AvatarGroup from '../../blocks/AvatarGroup/AvatarGroup';
import SearchTextField from '../../blocks/SearchTextField/SearchTextField';
import SplitButton from '../../blocks/SplitButton/SplitButton';
import CardGrid from '../../blocks/CardGrid';

const HeaderWrapper = styled.div`
  background-color: #f3f2f2;
  padding: 0 30px 20px 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchBarWrapper = styled.div`
  margin-top: 30px;
  padding: 10px 30px;
  background-color: #f3f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MiddleBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
`;

export default function StudyInfoPage() {
  return (
    <div>
      <HeaderWrapper>
        <TitleWrapper>
          <h1>알고리즘 박살</h1>
          <Button color='inherit'>
            <GitHubIcon fontSize='large' />
          </Button>
        </TitleWrapper>
        <AvatarGroup />
      </HeaderWrapper>
      <SearchBarWrapper>
        <MiddleBarWrapper>
          <SearchTextField />
          <SplitButton />
        </MiddleBarWrapper>
        <Button variant='outlined' color='inherit'>
          추가
        </Button>
      </SearchBarWrapper>
      <CardGrid />
    </div>
  );
}
