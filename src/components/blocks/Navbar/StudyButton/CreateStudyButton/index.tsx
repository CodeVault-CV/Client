import { useState, ChangeEvent } from "react";
import useCreateStudy from "../../../../../hooks/Study/useCreateStudy";
import debounce from "../../../../../utils/debounce";
import Loading from "../../../Loading";
import CreateStudyButton from "./CreateStudyButton";

export interface IErrorMessage {
  studyNameMessage: string;
  repoNameMessage: string;
}

export default function CreateStudyButtonContainer() {
  const { isLoading, createStudy } = useCreateStudy();
  const [studyName, setStudyName] = useState<string>("");
  const [repoName, setRepoName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<IErrorMessage>({
    studyNameMessage: "",
    repoNameMessage: "",
  });

  const checkStudyName = debounce((name: string) => {
    const message = "스터디 이름은 2~10자로 되어야 합니다.";

    if (name.length < 2 || name.length > 10) {
      setErrorMessage({
        ...errorMessage,
        studyNameMessage: message,
      });
      return;
    }

    setErrorMessage({
      ...errorMessage,
      studyNameMessage: "",
    });
  });

  const checkRepoName = debounce((name: string) => {
    const message1 = "저장소 이름은 1자 이상으로 되어야 합니다.";
    const message2 = "저장소 이름은 영문 대소문자와 _, - 특수문자로 되어야 합니다.";
    const pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣~!@#$%^&*()+|<>?:{}]/;

    if (!name) {
      setErrorMessage({
        ...errorMessage,
        repoNameMessage: message1,
      });
      return;
    }

    if (pattern.test(name)) {
      setErrorMessage({
        ...errorMessage,
        repoNameMessage: message2,
      });
      return;
    }

    setErrorMessage({
      ...errorMessage,
      repoNameMessage: "",
    });
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "studyName") {
      setStudyName(value);
      checkStudyName(value);
      return;
    }

    setRepoName(value.trim());
    checkRepoName(value);
  };

  const handleSubmit = async () => {
    createStudy({ studyName, repoName });
  };

  return (
    <>
      <CreateStudyButton
        studyName={studyName}
        repoName={repoName}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {isLoading && <Loading />}
    </>
  );
}
