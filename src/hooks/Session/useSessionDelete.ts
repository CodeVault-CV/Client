import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Session from "../../di/Session";

export function useSessionDelete(studyId: string) {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation((sessionId: number) => Session.deleteSession(sessionId), {
    onSuccess: () => navigate(`/study/${studyId}`),
  });

  return { isLoading, deleteRequest: mutate };
}
