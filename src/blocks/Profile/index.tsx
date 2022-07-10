import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-size: 0.7em;
    margin-bottom: 0;
  }
`;

interface ProfileProps {
  name: string;
  // image
}

export default function Profile({ name }: ProfileProps) {
  return (
    <ProfileWrapper>
      <Avatar />
      <p>{name}</p>
    </ProfileWrapper>
  );
}
