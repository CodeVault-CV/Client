import { useState, ChangeEvent } from 'react';
import CreateStudyButton from './CreateStudyButton';
import { createStudy } from '../../../../../api';

export interface IErrorMessage {
  studyName: string;
  repoName: string;
}

export default function CreateStudyButtonContainer() {
  const [repoName, setRepoName] = useState<string | null>(null);
  const [studyName, setStudyName] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<IErrorMessage>({
    studyName: '',
    repoName: '',
  });

  const handleValidation = (name: string): boolean => {
    // 스터디 이름 유효성 검사
    if (name === 'studyName') {
      if (!studyName || studyName.length < 2 || studyName.length > 10) {
        setErrorMessage({
          ...errorMessage,
          studyName: '스터디 이름은 2~10자로 되어야 합니다.',
        });
        return false;
      }

      setErrorMessage({
        ...errorMessage,
        studyName: '',
      });
      
      return true;
    }

    return true;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    name === 'studyName' ? setStudyName(value) : setRepoName(value);

    handleValidation(name);
  };

  const handleClick = async () => {
    console.log(repoName, studyName);
    const response = await createStudy(studyName!, repoName!);
    console.log(response);
  };

  return (
    <CreateStudyButton
      setRepoName={setRepoName}
      setStudyName={setStudyName}
      errorMessage={errorMessage}
      handleClick={handleClick}
      handleChange={handleChange}
    />
  );
}
