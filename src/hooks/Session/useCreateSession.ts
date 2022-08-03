import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createSession } from "../../api";
import Session from "../../types/Session";

export default function useCreateSession(studyId: string) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(
    ({ name, start, end }: Omit<Session, "id">) => createSession(studyId, name, start, end),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["sessionList"]);
      },
    }
  );

  return { isLoading, create: mutate };
}
