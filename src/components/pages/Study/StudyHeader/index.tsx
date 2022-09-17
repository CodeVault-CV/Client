import MemberButton from "./MemberButton";
import Header from "../../../blocks/Header";
import Wrapper from "../../../blocks/Wrapper";
import useStudy from "../../../../hooks/Study/useStudy";

type StudyHeaderProps = {
  studyId: string;
};

export default function StudyHeader({ studyId }: StudyHeaderProps) {
  const { study } = useStudy(studyId);
  
  return (
    <Wrapper>
      <Header label="스터디 이름" content={study?.name ?? "unknown"} />
      <MemberButton leaderId={study?.leader || ''} members={study?.members || []} />
    </Wrapper>
  );
}
