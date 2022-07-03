import styled from '@emotion/styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

const Container = styled.div`
  background-color: #f3f2f2;
  padding: 0 30px 20px 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-size: 0.7em;
    font-weight: 700;
  }
`;

const Button = styled.div`
  cursor: pointer;
`

export default function StudyInfoHeaderBlock() {
  return (
    <Container>
      <TitleWrapper>
        <h1>알고리즘 박살</h1>
        <Button>
          <GitHubIcon fontSize='large' />
        </Button>
      </TitleWrapper>
      <Stack direction='row' spacing={4}>
        <Button>
          <MemberWrapper>
            <Badge
              overlap='circular'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={<AddCircleIcon />}
            >
              <Avatar />
            </Badge>
            <p>스터디원 추가</p>
          </MemberWrapper>
        </Button>
        {['KingDonggyu', 'woong-jae', 'SeongukBaek', 'Go-Jaecheol'].map(
          (name) => (
            <MemberWrapper key={name}>
              <Avatar />
              <p>{name}</p>
            </MemberWrapper>
          )
        )}
      </Stack>
    </Container>
  );
}
