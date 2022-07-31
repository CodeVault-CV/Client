import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from 'react';
import StudyName from './StudyName';
import debounce from '../../../../../utils/debounce';
import { updateStudy } from '../../../../../api'

interface StudyNameProps {
  id: string;
  name: string;
}

export default function StudyNameContainer({ id, name }: StudyNameProps) {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ id, name }: StudyNameProps) => updateStudy({ id, name }),
    {
      onSuccess: (res) => {
        console.log(res);
        queryClient.invalidateQueries(["study"]);
      },
    }
  );
  const [studyName, setStudyName] = useState<string>(name);
  const [isTextFiled, setTextFiled] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const checkStudyName = debounce((name: string) => {
    const message = "스터디 이름은 2~10자로 되어야 합니다.";
    if (name.length < 2 || name.length > 10) {
      setErrorMessage(message);
      return;
    }
    setErrorMessage('');
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStudyName(e.target.value);
    checkStudyName(e.target.value);
  }

  const handleClick = async () => {
    if (isTextFiled && name !== studyName) {
      mutation.mutate({ id, name: studyName })
    }
    setTextFiled(!isTextFiled);
  };

  return (
    <StudyName
      studyName={studyName}
      isTextFiled={isTextFiled}
      errorMessage={errorMessage}
      handleChange={handleChange}
      handleClick={handleClick}
    />
  );
}
