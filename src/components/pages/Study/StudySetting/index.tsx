import { Stack, Divider } from '@mui/material';
import Wrapper from '../../../blocks/Wrapper';
import useStudy from '../../../../hooks/Study/useStudy';
import StudyName from './StudyName';
import StudyMember from './StudyMember';
import StudyDelete from './StudyDelete';

type StudySettingProps = {
  studyId: string;
};

export default function StudySetting({ studyId }: StudySettingProps) {
  const { study } = useStudy(studyId);

  return (
    <Wrapper>
      <Stack paddingX={3}>
        <StudyName id={studyId} name={study?.name ?? 'unknown'} />
        <Divider sx={{ mt: 5, mb: 3 }} />
        <StudyMember id={studyId} members={study?.members ?? []} />
        <Divider sx={{ mt: 5, mb: 3 }} />
        <StudyDelete id={studyId} />
      </Stack>
    </Wrapper>
  );
}
