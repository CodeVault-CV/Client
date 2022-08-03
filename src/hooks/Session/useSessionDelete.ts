import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteSession } from "../../api";

export function useSessionDelete(studyId: string, sessionId: number) {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(() => deleteSession(sessionId), {
    onSuccess: () => navigate(`/study/${studyId}`),
  });

  return { isLoading, deleteRequest: mutate };
}