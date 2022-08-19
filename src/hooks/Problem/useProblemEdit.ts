import { useQueryClient, useMutation } from "@tanstack/react-query";
import IProblemEntity from "../../core/entities/interfaces/iProblem";
import Session from "../../di/Session";

export default function useProblemEdit(
  sessionId: number,
  problemList: IProblemEntity[],
  successCallback?: (...props: any[]) => void
) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(
    (problems: IProblemEntity[]) => Session.updateProblemList(sessionId, problemList, problems),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["problemList", sessionId]);
        successCallback?.();
      },
    }
  );

  return { isLoading, edit: mutate };
}
