import { useQueryClient, useMutation } from "@tanstack/react-query";
import Session from "../../di/Session";

export default function useCreateSession(studyId: string) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(
    ({ name, start, end }: { name: string; start: Date; end: Date }) =>
      Session.createSession(studyId, name, start, end),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["sessionList", studyId]);
      },
    }
  );

  return { isLoading, create: mutate };
}
