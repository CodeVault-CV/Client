import styled from "@emotion/styled";
import { Stack, Button } from "@mui/material";
import { GitHub } from "@mui/icons-material";

import Header, { HeaderSkeleton } from "../../../blocks/Header";
import Profile from "../../../blocks/Profile";
import Wrapper from "../../../blocks/Wrapper";
import StudyName from "./StudyName";
import StudySetting from "./StudySetting";
import { useQuery } from "@tanstack/react-query";
import StudyUseCase from "../../../../core/useCases/Study";

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

type StudyHeaderProps = {
  studyId: string;
};

export default function StudyHeader({ studyId }: StudyHeaderProps) {
  const { isLoading, data: study } = useQuery(["study", studyId], () =>
    StudyUseCase.getStudy(studyId)
  );

  return (
    <Wrapper>
      {isLoading ? (
        <HeaderSkeleton />
      ) : (
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
      )}
    </Wrapper>
  );
}
