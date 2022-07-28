import { MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { deleteSession } from "../../../../api";
import SessionHeader from "./SessionHeader";
import { LoadingHeader } from "../../../blocks/Header";
import useSession from "../../../../hooks/useSession";

type SessionHeaderProps = {
  sessionId: number;
};

export default function SessionHeaderContainer({ sessionId }: SessionHeaderProps) {
  const { isLoading, data } = useSession(sessionId);
  const { studyId } = useParams();
  const navigate = useNavigate();
  const mutation = useMutation((sessionId: number) => deleteSession(sessionId), {
    onSuccess: () => navigate(`/study/${studyId}`),
  });

  const handleDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    const willDelete = window.confirm("세션을 삭제하겠습니까?");
    if (!willDelete) return;
    mutation.mutate(sessionId);
  };

  if (isLoading) return <LoadingHeader />;

  return <SessionHeader session={data} handleDelete={handleDelete} />;
}
