import { Avatar, AvatarGroup, Stack, Typography, Divider, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';

import { useState } from 'react';
import Modal from '../../../../blocks/Modal';
import IMemberEntity from '../../../../../core/entities/interfaces/iMember';

const MemberGroup = styled(AvatarGroup)({
  '& .MuiAvatar-root': { width: 25, height: 25, fontSize: 13 },
  '&: hover': { background: 'rgba(0, 0, 0, 0.04)' },
  cursor: 'pointer',
  width: 'fit-content',
  marginLeft: 'auto',
  border: '1px solid lightgray',
  borderRadius: '10px',
  padding: '3px',
});

const LinkStyle = {
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 2,
};

function Member({ member }: { member: IMemberEntity }) {
  return (
    <Stack direction='row' alignItems='center' gap={3}>
      <Avatar alt={member.name} src={member.imageUrl} />
      {member.name}
      <Link color='inherit' href={member.githubUrl} sx={LinkStyle}>
        <GitHubIcon />
      </Link>
    </Stack>
  );
}

interface MemberButtonProps {
  leaderId: string;
  members: IMemberEntity[];
}

export default function MemberButton({ leaderId, members }: MemberButtonProps) {
  const leader = members.find(
    (member) => member.id === leaderId
  ) as IMemberEntity;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MemberGroup max={3} spacing={6} onClick={handleOpen}>
        {members.map((member) => (
          <Avatar key={member.id} alt={member.name} src={member.imageUrl} />
        ))}
      </MemberGroup>
      <Modal open={open} onClose={handleClose} sx={{ border: 'none' }}>
        <Stack width={300} maxHeight={500} spacing={3} overflow='auto'>
          <Typography variant='body1'>
            <b>스터디장</b>
          </Typography>
          <Member member={leader} />
          <Divider />
          <Typography variant='body1'>
            <b>스터디원</b> {members.length - 1}
          </Typography>
          {members.map((member) => (
            member.id !== leaderId && <Member member={member} />
          ))}
        </Stack>
      </Modal>
    </>
  );
}
