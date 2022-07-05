import styled from '@emotion/styled';

import AlignItemsList from '../../blocks/AlignItemsList';
import Button from '@mui/material/Button';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 150px;
  background-color: #f3f2f2;
`;

const Title = styled.p`
  font-size: 1.5em;
  font-weight: 700;
`;

export default function StudyLisPage() {
  return (
    <Container>
      <ListWrapper>
        <Title>내 스터디 목록</Title>
        <AlignItemsList />
        <Button variant='outlined'>스터디 생성</Button>
      </ListWrapper>
    </Container>
  );
}
