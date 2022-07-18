import React, { useState } from "react";

import useView from "../../../../hooks/useView";
import SolutionForm from "./SolutionForm";

export default function SolutionFormContainer() {
  const { view, changeView } = useView("code");
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");

  const changeCode = (value: string) => {
    setCode(value);
  };

  const changeReview = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  };

  return (
    <SolutionForm
      code={code}
      review={review}
      view={view}
      changeCode={changeCode}
      changeReview={changeReview}
      changeView={changeView}
    />
  );
}
