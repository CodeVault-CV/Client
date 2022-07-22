import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

import Header from "../../../blocks/Header";
import Profile from "../../../blocks/Profile";
import Wrapper from "../../../blocks/Wrapper";
import StudySettingMenu from "./StudySettingMenu";

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
        <GitHubIcon fontSize="large" />
      </Button>
      <StudySettingMenu />
    </EndBlockWrapper>
  );
}

interface StudyHeaderProps {
  members: { id: string, name: string, imageUrl: string, githubUrl: string }[];
  name: string;
  url: string;
}

export default function StudyHeader({ name, members, url }: StudyHeaderProps) {
  return (
    <Wrapper>
      <Header title={name} endBlock={<HeaderEndBlock url={url} />}>
        <Stack direction="row" spacing={4} sx={{ marginTop: 1 }}>
          {members.map(({ id, name, imageUrl, githubUrl }) => (
            <Profile key={id} name={name} imageUrl={imageUrl} href={githubUrl} />
          ))}
        </Stack>
      </Header>
    </Wrapper>
  );
}
