import { useState, ChangeEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import StudySetting from './StudySetting';
import Study from '../../../../../di/Study';
import debounce from '../../../../../utils/debounce';
import IUserEntity from '../../../../../core/entities/interfaces/iUser';

interface StudySettingProps {
  id: string;
}

export default function StudySettingContainer({ id }: StudySettingProps) {
  const navigate = useNavigate();
  const mutation = useMutation((id: string) => Study.deleteStudy(id), {
    onSuccess: () => navigate('/'),
  });

  const [userName, setUserName] = useState<string>('');
  const [searched, setSearched] = useState<[IUserEntity] | []>([]);

  const searchUser = (debounce((name: string) => {
    Study.searchStudyMember(id, name).then((data) => {
      setSearched(data)
    })
  }))

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserName(e.target.value);
    searchUser(e.target.value);
  }

  const handleDelete = () => {
    mutation.mutate(id);
  };

  return (
    <StudySetting
      userName={userName}
      searched={searched}
      handleChange={handleChange}
      handleDelete={handleDelete}
    />
  );
}