import { Alert, Stack } from "@mui/material";
import React from "react";
import Button from "../../../../atoms/Button";
import { useSessionDelete } from "../../../../../hooks/Session/useSessionDelete";
import Loading from "../../../../blocks/Loading";

interface SessionDeleteProps {
  studyId: string;
  sessionId: number;
}

export default function SessionDelete({ studyId, sessionId }: SessionDeleteProps) {
  const { isLoading, deleteRequest } = useSessionDelete(studyId as string, sessionId);

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const willDelete = window.confirm("세션을 삭제하겠습니까?");
    if (!willDelete) return;
    deleteRequest();
  };

  return (
    <>
      <Alert severity="warning" sx={{ mt: 2, mb: 4 }}>
        세션 관련 모든 정보(Git Repository 포함)를 영구적으로 삭제합니다. 삭제된 데이터는 복구할 수
        없습니다.
      </Alert>
      <Stack alignItems="center">
        <Button color="error" onClick={handleDelete}>
          세션 삭제
        </Button>
      </Stack>
      {isLoading && <Loading />}
    </>
  );
}
