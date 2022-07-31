import styled from "@emotion/styled";
import { Stack, Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';

import Header from "../../../blocks/Header";
import Profile from "../../../blocks/Profile";
import Wrapper from "../../../blocks/Wrapper";
import StudyName from "./StudyName";
import StudySettingMenu from "./StudySettingMenu";
import { StudyHeaderProps } from ".";

const EndBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

interface HeaderEndBlockProps {
  url: string;
}

function HeaderEndBlock({ url }: HeaderEndBlockProps) {
  return (
    <EndBlockWrapper>
      <Button href={url} color="inherit">
        <GitHub fontSize="large" />
      </Button>
      <StudySettingMenu />
    </EndBlockWrapper>
  );
}

export default function StudyHeaderBlock({ name, members, url }: StudyHeaderProps) {
  return (
    <Wrapper>
      <Header 
        title={<StudyName name={name} />} 
        endBlock={<HeaderEndBlock url={url} />}
      >
        <Stack direction="row" spacing={4} sx={{ marginTop: 1 }}>
          {members.map(({ id, name, imageUrl, githubUrl }) => (
            <Profile key={id} name={name} imageUrl={imageUrl} href={githubUrl} />
          ))}
        </Stack>
      </Header>
    </Wrapper>
  );
}
