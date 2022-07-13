import styled from "@emotion/styled";
import StudyInfoHeader from "./StudyInfoHeader";
import StudyInfoMiddleBar from "./StudyInfoMiddleBar";
import SessionGrid from "./SessionGrid";

const StudyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

export default function StudyInfoPage() {
  return (
    <StudyInfoWrapper>
      <StudyInfoHeader />
      <StudyInfoMiddleBar />
      <SessionGrid />
    </StudyInfoWrapper>
  );
}
