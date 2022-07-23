import { useState, ChangeEvent } from 'react';
import CreateStudyButton from './CreateStudyButton';
import { createStudy } from '../../../../../api';

export interface IName {
  studyName: string;
  repoName: string;
}

export default function CreateStudyButtonContainer() {
  const [repoName, setRepoName] = useState<string | null>(null);
  const [studyName, setStudyName] = useState<string | null>(null);
  const [input, setInput] = useState<IName>({ studyName: '', repoName: '' });
  const [errorMessage, setErrorMessage] = useState<IName>({
    studyName: '',
    repoName: '',
  });

  const handleValidation = (name: string, value: string): boolean => {
    // 스터디 이름 유효성 검사
    if (name === 'studyName') {
      if (!value || value.length < 2 || value.length > 10) {
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

    // 저장소 이름 유효성 검사
    if (!value) {
      setErrorMessage({
        ...errorMessage,
        repoName: '저장소 이름은 1자 이상으로 되어야 합니다.',
      });
      return false;
    }

    const pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣~!@#$%^&*()+|<>?:{}]/;

    if (pattern.test(value)) {
      setErrorMessage({
        ...errorMessage,
        repoName:
          '저장소 이름은 영문 대소문자와 _, - 특수문자로 되어야 합니다.',
      });
      return false;
    }

    setErrorMessage({
      ...errorMessage,
      repoName: '',
    });
    return true;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    name === 'studyName'
      ? setInput({
          ...input,
          studyName: value,
        })
      : setInput({
          ...input,
          repoName: value.trim(),
        });

    handleValidation(name, value);
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
