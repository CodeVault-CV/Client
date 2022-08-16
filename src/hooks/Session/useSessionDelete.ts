import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Session from "../../di/Session";

export function useSessionDelete(studyId: string, sessionId: number) {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(() => Session.deleteSession(sessionId), {
    onSuccess: () => navigate(`/study/${studyId}`),
  });

  return { isLoading, deleteRequest: mutate };
}
