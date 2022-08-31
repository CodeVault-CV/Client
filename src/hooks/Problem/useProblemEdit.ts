import { useQueryClient, useMutation } from "@tanstack/react-query";
import { IProblemData } from "../../core/entities/interfaces/iProblem";
import Session from "../../di/Session";

export default function useProblemEdit(
  sessionId: number,
  problemList: Omit<IProblemData, "url">[]
) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(
    (problems: Omit<IProblemData, "url">[]) =>
      Session.updateProblemList(sessionId, problemList, problems),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["session", sessionId]);
      },
    }
  );

  return { isLoading, edit: mutate };
}
