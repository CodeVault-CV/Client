import { useQueryClient, useMutation } from "@tanstack/react-query";
import Session from "../../di/Session";

export default function useSessionUpdate(sessionId: number) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(
    (updatedSession: { id: number; name: string; start: Date; end: Date }) =>
      Session.updateSession(updatedSession),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["session", sessionId]);
      },
    }
  );

  return { isLoading, update: mutate };
}
