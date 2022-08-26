import { useState, MouseEvent } from "react";
import useCreateSolution from "../../../../hooks/Solution/useCreateSolution";

import useView from "../../../../hooks/useView";
import Loading from "../../../blocks/Loading";
import SolutionForm from "./SolutionForm";

export default function SolutionFormContainer({ problemId }: { problemId: number }) {
  const { isLoading, createSolution } = useCreateSolution(problemId);

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
    createSolution({ language, code, review });
  };

  return (
    <>
      <SolutionForm
        code={code}
        isMine={true}
        review={review}
        view={view}
        language={language}
        handleCode={handleCode}
        handleReview={handleReview}
        handleView={changeView}
        handleLanguage={handleLanguage}
        handleSubmit={handleSubmit}
      />
      {isLoading && <Loading />}
    </>
  );
}
