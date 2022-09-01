import { useQueryClient, useMutation } from "@tanstack/react-query";
import Session from "../../di/Session";
import SessionEntity from "../../core/entities/Session";
import ISessionEntity from "../../core/entities/interfaces/iSession";

export default function useSessionUpdate(studyId: string) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(
    (updatedSession: { id: number; name: string; start: Date; end: Date }) =>
      Session.updateSession(updatedSession),
    {
      onSuccess: (newSession) => {
        const prevSession = queryClient.getQueryData(["session", newSession.id]) as ISessionEntity;

        const newSessionEntity = new SessionEntity(newSession);
        newSessionEntity.pushProblems([...prevSession.problems]);

        queryClient.setQueryData(["session", newSession.id], newSessionEntity);

        queryClient.invalidateQueries(["study", studyId]);
      },
    }
  );

  return { isLoading, update: mutate };
}
