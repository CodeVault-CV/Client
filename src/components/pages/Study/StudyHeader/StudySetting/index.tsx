import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deleteStudy } from '../../../../../api';
import StudySetting from './StudySetting';

interface StudySettingProps {
  id: string;
}

export default function StudySettingContainer({ id }: StudySettingProps) {
  const navigate = useNavigate();
  const mutation = useMutation((id: string) => deleteStudy(id), {
    onSuccess: () => navigate('/'),
  });

  const handleDelete = () => {
    mutation.mutate(id);
  };

  return <StudySetting handleDelete={handleDelete} />;
}
