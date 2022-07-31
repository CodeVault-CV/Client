import { useState } from 'react';
import StudyHeaderTitle from './StudyHeaderTitle';

export interface StudyHeaderTitleProps {
  name: string;
}

export default function HeaderTitleContainer({ name }: StudyHeaderTitleProps) {
  const [title, setTitle] = useState<string>(name);
  const [isTextFiled, setTextFiled] = useState<boolean>(false);

  const handleClick = () => {
    if (isTextFiled && name !== title) {
      
    }

    setTextFiled(!isTextFiled);
  };

  return (
    <StudyHeaderTitle
      title={title}
      isTextFiled={isTextFiled}
      setTitle={setTitle}
      handleClick={handleClick}
    />
  );
}
