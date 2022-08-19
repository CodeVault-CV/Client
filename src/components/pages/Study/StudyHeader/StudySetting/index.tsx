import { useState } from 'react';
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
    if (!name) {
      setSearched([]);
      return;
    }
    Study.searchStudyMember(id, name).then((data) => {
      setSearched(data)
    })
  }))

  const handleChange = (value: string) => {
    setUserName(value);
    searchUser(value);
  }

  const handleDelete = () => {
    mutation.mutate(id);
  };

  const handleAddMember = () => {
    Study.addStudyMember(id, userName).then(({ status, message }) => {
      status === 200
        ? alert(`${userName} 님에게 초대 메일을 전송했습니다.`)
        : alert(message);
    });
  }

  return (
    <StudySetting
      userName={userName}
      searched={searched}
      handleChange={handleChange}
      handleDelete={handleDelete}
      handleAddMember={handleAddMember}
    />
  );
}