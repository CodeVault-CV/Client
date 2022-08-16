import { useMutation } from "@tanstack/react-query";
import { useState, MouseEvent } from "react";
import { createSolution } from "../../../../api";

import useView from "../../../../hooks/useView";
import SolutionForm from "./SolutionForm";

export default function SolutionFormContainer({ id }: { id: number }) {
  const { mutate } = useMutation(
    ({
      id,
      code,
      review,
      language,
    }: {
      id: number;
      code: string;
      review: string;
      language: string;
    }) => createSolution(id, code, review, language),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
  
  const { view, changeView } = useView("code");
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [language, setLanguage] = useState("cpp");
    
  const handleLanguage = (language: string) => {
    setLanguage(language);
  };

  const handleCode = (value: string) => {
    setCode(value);
  };

  const handleReview = (value: string) => {
    setReview(value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(id, language, code, review);
    mutate({ id, language, code, review });
  };

  return (
    <SolutionForm
      code={code}
      isMine={false}
      review={review}
      view={view}
      language={language}
      handleCode={handleCode}
      handleReview={handleReview}
      handleView={changeView}
      handleLanguage={handleLanguage}
      handleSubmit={handleSubmit}
    />
  );
}
