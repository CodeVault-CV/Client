import { useState, ChangeEvent } from 'react';
import CreateStudyButton from './CreateStudyButton';
import { createStudy } from '../../../../../api';

export interface IName {
  studyName: string;
  repoName: string;
}

export default function CreateStudyButtonContainer() {
  const [input, setInput] = useState<IName>({ studyName: '', repoName: '' });
  const [errorMessage, setErrorMessage] = useState<IName>({
    studyName: '',
    repoName: '',
  });

  const checkStudyName = (value: string) => {
    if (!value || value.length < 2 || value.length > 10) {
      setErrorMessage({
        ...errorMessage,
        studyName: '스터디 이름은 2~10자로 되어야 합니다.',
      });
      return;
    }

    setErrorMessage({
      ...errorMessage,
      studyName: '',
    });
  };

  const checkRepoName = (value: string) => {
    const message1 = '저장소 이름은 1자 이상으로 되어야 합니다.';
    const message2 = '저장소 이름은 영문 대소문자와 _, - 특수문자로 되어야 합니다.';
    const pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣~!@#$%^&*()+|<>?:{}]/;

    if (!value) {
      setErrorMessage({
        ...errorMessage,
        repoName: message1,
      });
      return;
    }

    if (pattern.test(value)) {
      setErrorMessage({
        ...errorMessage,
        repoName: message2
      });
      return;
    }

    setErrorMessage({
      ...errorMessage,
      repoName: '',
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'studyName') {
      setInput({
        ...input,
        studyName: value,
      });
      checkStudyName(value);
      return;
    }

    setInput({
      ...input,
      repoName: value.trim(),
    });
    checkRepoName(value);
  };

  const handleClick = async () => {
    const response = await createStudy(input.studyName, input.repoName);
    console.log(response);
  };

  return (
    <CreateStudyButton
      input={input}
      errorMessage={errorMessage}
      handleClick={handleClick}
      handleChange={handleChange}
    />
  );
}
