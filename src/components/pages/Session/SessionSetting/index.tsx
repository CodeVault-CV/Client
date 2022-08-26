import { Stack, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import useSession from '../../../../hooks/Session/useSession';
import Wrapper from '../../../blocks/Wrapper';
import ProblemEdit from './ProblemEdit';
import SessionEdit from './SessionEdit';
import SessionDelete from './SessionDelete';

interface SessionSettingProps {
  sessionId: number;
  changeTab: () => void;
}

export default function SessionSetting({
  sessionId,
  changeTab,
}: SessionSettingProps) {
  const { studyId } = useParams();
  const { session } = useSession(sessionId);
  
  return (
    <Wrapper>
      <Stack paddingX={3}>
        <h2>세션 편집</h2>
        <SessionEdit
          id={sessionId}
          name={session?.name}
          start={session?.start}
          end={session?.end}
        />
        <Divider sx={{ mt: 5, mb: 3 }} />
        <h2>문제 편집</h2>
        <ProblemEdit
          sessionId={sessionId}
          prevProblems={session?.problems}
          changeTab={changeTab}
        />
        <Divider sx={{ mt: 5, mb: 3 }} />
        <SessionDelete studyId={studyId as string} sessionId={sessionId} />
      </Stack>
    </Wrapper>
  );
}