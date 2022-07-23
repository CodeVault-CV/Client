import { useState } from 'react';
import CreateStudyButton from './CreateStudyButton';
import { createStudy } from '../../../../../api';

export default function CreateStudyButtonContainer() {
  const [repoName, setRepoName] = useState<string | null>(null);
  const [studyName, setStudyName] = useState<string | null>(null);

  const handleClick = async () => {
    if (!repoName || !studyName) {
      return;
    }
    console.log(repoName, studyName);
    const response = await createStudy(studyName, repoName);
    console.log(response.message);
  };

  return (
    <CreateStudyButton
      setRepoName={setRepoName}
      setStudyName={setStudyName}
      handleClick={handleClick}
    />
  );
}
