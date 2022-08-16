import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateSession } from "../../api";
import Session from "../../core/types/Session";

export default function useSessionUpdate(sessionId: number) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(
    (updatedSession: Session) => updateSession(updatedSession),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["session", sessionId]);
      },
    }
  );

  return { isLoading, update: mutate };
}