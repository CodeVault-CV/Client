import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import StudySetting from './StudySetting';
import StudyUseCase from "../../../../../core/useCases/Study";

interface StudySettingProps {
  id: string;
}

export default function StudySettingContainer({ id }: StudySettingProps) {
  const navigate = useNavigate();
  const mutation = useMutation((id: string) => StudyUseCase.deleteStudy(id), {
    onSuccess: () => navigate('/'),
  });

  const handleDelete = () => {
    mutation.mutate(id);
  };

  return <StudySetting handleDelete={handleDelete} />;
}
