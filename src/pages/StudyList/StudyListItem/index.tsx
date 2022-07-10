import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ShadowBox from '../../../blocks/ShadowBox';
import Profile from '../../../blocks/Profile';

import { IStudy } from '../index';

const Item = styled(ListItem)`
  display: flex;
  align-items: center;
  height: 100px;
  padding-top: 0;
`;

const ItemText = styled(ListItemText)`
  height: 78px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 30px;
  & span {
    font-size: 1.2em;
    margin-bottom: 16px;
  }
`;

interface StudyListItemProps {
  study: IStudy;
}

export default function StudyListItem({ study }: StudyListItemProps) {
  return (
    <ShadowBox>
      <Item alignItems='flex-start'>
        <ListItemAvatar sx={{width: '100px'}}>
            <Profile name={`${study.repositoryName}`} />
        </ListItemAvatar>
        <ItemText primary={study.name} secondary={`팀장: ${study.leaderId}`} />
      </Item>
    </ShadowBox>
  );
}
