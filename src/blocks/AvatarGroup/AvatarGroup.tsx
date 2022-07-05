import styled from '@emotion/styled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

const AvatarGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-size: 0.7em;
    font-weight: 700;
  }
`;

const AvatarAddButton = styled.div`
  cursor: pointer;
`

export default function AvatarGroupBlock() {
  return (
    <Stack direction='row' spacing={4}>
      <AvatarAddButton>
        <AvatarGroupWrapper>
          <Badge
            overlap='circular'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={<AddCircleIcon />}
          >
            <Avatar />
          </Badge>
          <p>스터디원 추가</p>
        </AvatarGroupWrapper>
      </AvatarAddButton>
      {['KingDonggyu', 'woong-jae', 'SeongukBaek', 'Go-Jaecheol'].map(
        (name) => (
          <AvatarGroupWrapper key={name}>
            <Avatar />
            <p>{name}</p>
          </AvatarGroupWrapper>
        )
      )}
    </Stack>
  );
}
