import styled from "@emotion/styled";
import StudyHeader from "./StudyHeader";
import StudyMiddleBar from "./StudyMiddleBar";
import SessionGrid from "./SessionGrid";

const StudyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

interface StudyProps {
  study: {
    id: string,
    members: { id: string, name: string, imageUrl: string, githubUrl: string } [],
    name: string,
    url: string
  }
}

export default function Study({ study }: StudyProps) {
  return (
    <StudyInfoWrapper>
      <StudyHeader {...study} />
      <StudyMiddleBar />
      <SessionGrid />
    </StudyInfoWrapper>
  );
}
