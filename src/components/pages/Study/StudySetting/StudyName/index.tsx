import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Study from "../../../../../di/Study";
import debounce from "../../../../../utils/debounce";
import Button from "../../../../atoms/Button";

interface StudyNameProps {
  studyId: string;
  name: string;
}

export default function StudyName({ studyId, name }: StudyNameProps) {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ studyId, name }: StudyNameProps) => Study.updateStudy({ id: studyId, name }),
    {
      onSuccess: () => queryClient.invalidateQueries(["study"]),
    }
  );
  const [studyName, setStudyName] = useState<string>(name);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const checkStudyName = debounce((name: string) => {
    if (name.length < 2 || name.length > 10) {
      setErrorMessage("스터디 이름은 2~10자로 되어야 합니다.");
      return;
    }
    setErrorMessage("");
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStudyName(e.target.value);
    checkStudyName(e.target.value);
  };

  const handleClick = async () => {
    name !== studyName && mutation.mutate({ studyId, name: studyName });
  };

  return (
    <>
      <h3>스터디 이름</h3>
      <Stack direction="row" spacing={1}>
        <TextField
          size="small"
          value={studyName}
          helperText={errorMessage}
          error={errorMessage ? true : false}
          onChange={(e) => handleChange(e)}
          sx={{ width: 240 }}
        />
        <Button
          color="success"
          onClick={handleClick}
          disabled={name === studyName || errorMessage ? true : false}
          sx={{ height: "40px" }}
        >
          변경
        </Button>
      </Stack>
    </>
  );
}
