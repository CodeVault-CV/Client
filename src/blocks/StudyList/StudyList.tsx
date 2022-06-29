import styled from '@emotion/styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';

import { IStudy } from '.';

const StudyList = styled(List)`
  width: 400px;
  height: 530px;
  margin: 30px 0;
  padding: 0 30px;
  overflow-y: auto;
  & li {
    margin: 20px 0;
  }
  & li: first-of-type {
    margin-top: 0;
  }
  & li: last-of-type {
    margin-bottom: 0;
  }
`;

const StudyItem = styled(ListItem)`
  display: flex;
  align-items: center;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 8%) 2px 4px 12px;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1) 0s;
  cursor: pointer;
  &: hover {
    box-shadow: 2px 4px 16px rgb(0 0 0 / 16%);
    transform: scale3d(1.01, 1.01, 1.01);
  }
`;

const StudyItemText = styled(ListItemText)`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

interface ListProps {
  studys: IStudy[];
}

export default function StudyListBlock ({ studys }: ListProps) {
  return (
    <StudyList>
      {studys.map((study) => (
        <StudyItem key={study.studyId} alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt={study.name} src='.' />
          </ListItemAvatar>
          <StudyItemText
            primary={study.name}
            secondary={`팀장: ${study.leaderId}`}
          />
        </StudyItem>
      ))}
    </StudyList>
  );
}
