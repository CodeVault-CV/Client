import styled from "@emotion/styled";
import { Stack, Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';

import Header from "../../../blocks/Header";
import Profile from "../../../blocks/Profile";
import Wrapper from "../../../blocks/Wrapper";
import StudyName from "./StudyName";
import StudySetting from "./StudySetting";

const EndBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

interface HeaderEndBlockProps {
  id: string;
  url: string;
}

function HeaderEndBlock({ id, url }: HeaderEndBlockProps) {
  return (
    <EndBlockWrapper>
      <Button href={url} color="inherit">
        <GitHub fontSize="large" />
      </Button>
      <StudySetting id={id} />
    </EndBlockWrapper>
  );
}

export interface StudyHeaderProps {
  id: string;
  members: { id: string, name: string, imageUrl: string, githubUrl: string }[];
  name: string;
  url: string;
}

export default function StudyHeader({ id, name, members, url }: StudyHeaderProps) {
  return (
    <Wrapper>
      <Header 
        title={<StudyName id={id} name={name} />} 
        endBlock={<HeaderEndBlock id={id} url={url} />}
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
