import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

import Header from '../../../components/Header';
import Profile from '../../../blocks/Profile';
import Wrapper from '../../../blocks/Wrapper';
import StudySettingMenu from './StudySettingMenu';

const AvatarGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-size: 0.7em;
    font-weight: 700;
  }
`;

const EndBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

function HeaderEndBlock() {
  return (
    <EndBlockWrapper>
      <Button color='inherit'>
        <GitHubIcon fontSize='large' />
      </Button>
      <StudySettingMenu />
    </EndBlockWrapper>
  );
}

export default function StudyInfoHeader() {
  return (
    <Wrapper>
      <Header title='알고리즘 박살' endBlock={<HeaderEndBlock />}>
        <Stack direction='row' spacing={4} sx={{ marginTop: 3 }}>
          {['KingDonggyu', 'woong-jae', 'SeongukBaek', 'Go-Jaecheol'].map(
            (name) => (
              <AvatarGroupWrapper key={name}>
                <Profile name={name} />
              </AvatarGroupWrapper>
            )
          )}
        </Stack>
      </Header>
    </Wrapper>
  );
}
