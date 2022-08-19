import styled from "@emotion/styled";
import { Stack, Button } from "@mui/material";
import { GitHub } from "@mui/icons-material";

import Header from "../../../blocks/Header";
import Profile from "../../../blocks/Profile";
import Wrapper from "../../../blocks/Wrapper";
import StudyName from "./StudyName";
import StudySetting from "./StudySetting";
import useStudyLeader from "../../../../hooks/Study/useStudyLeader";
import useStudy from "../../../../hooks/Study/useStudy";

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
      {useStudyLeader() && <StudySetting id={id} />}
    </EndBlockWrapper>
  );
}

type StudyHeaderProps = {
  studyId: string;
};

export default function StudyHeader({ studyId }: StudyHeaderProps) {
  const { study } = useStudy(studyId);

  return (
    <Wrapper>
      <Header
        title={<StudyName id={studyId} name={study?.name ?? "unknown"} />}
        endBlock={<HeaderEndBlock id={studyId} url={study?.url ?? "unknown"} />}
      >
        <Stack direction="row" spacing={4} sx={{ marginTop: 1 }}>
          {study?.members.map(({ id, name, imageUrl, githubUrl }) => (
            <Profile key={id} name={name} imageUrl={imageUrl} href={githubUrl} />
          ))}
        </Stack>
      </Header>
    </Wrapper>
  );
}
