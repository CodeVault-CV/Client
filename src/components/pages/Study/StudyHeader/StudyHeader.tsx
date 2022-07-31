import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from "@mui/icons-material/GitHub";
import EditIcon from '@mui/icons-material/Edit';

import Header from "../../../blocks/Header";
import Profile from "../../../blocks/Profile";
import Wrapper from "../../../blocks/Wrapper";
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
      <EditTitleButton />
      <Button href={url} color="inherit">
        <GitHubIcon fontSize="large" />
      </Button>
      <StudySettingMenu />
    </EndBlockWrapper>
  );
}

function EditTitleButton() {
  return (
    <IconButton>
      <EditIcon fontSize="small" />
    </IconButton>
  )
}

export default function StudyHeaderBlock({ name, members, url }: StudyHeaderProps) {
  return (
    <Wrapper>
      <Header 
        title={name} 
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
