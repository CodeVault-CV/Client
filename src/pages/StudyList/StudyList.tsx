import styled from '@emotion/styled';
import List from '@mui/material/List';
import Wrapper from '../../blocks/Wrapper';
import StudyListItem from './StudyListItem';
import StudyCreationModal from './StudyCreationModal';

import { IStudy } from '.';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListWrapper = styled(List)`
  width: 400px;
  & li {
    margin-bottom: 30px;
  }
`;

const Title = styled.p`
  font-size: 1.9em;
  font-weight: 700;
`;

interface StudyListProps {
  studys: IStudy[];
}

export default function StudyLisPage({ studys }: StudyListProps) {
  return (
    <Wrapper>
      <LayoutWrapper>
        <Title>내 스터디 목록</Title>
        <ListWrapper>
          {studys.map((study) => (
            <StudyListItem key={study.studyId} study={study} />
          ))}
        </ListWrapper>
        <StudyCreationModal />
      </LayoutWrapper>
    </Wrapper>
  );
}
