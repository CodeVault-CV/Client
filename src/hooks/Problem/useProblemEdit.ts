import { useQueryClient, useMutation } from "@tanstack/react-query";
import Problem from "../../di/Problem";

export default function useProblemEdit(
  sessionId: number,
  problemList: { id: number; number: string; name: string; platform: string }[],
  successCallback?: (...props: any[]) => void
) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(
    (
      problems: { id: number; number: string; name: string; platform: string; isNew: boolean }[]
    ) => {
      const new_id_set = new Set(problems.map(({ id }) => id));
      const new_problems = problems.filter(({ isNew }) => isNew);
      const deleted_problems = problemList.filter(({ id }) => !new_id_set.has(id));

      return Promise.all([
        ...deleted_problems.map(({ id }) => Problem.deleteProblem(id)),
        ...new_problems.map(({ name, number, platform }) =>
          Problem.createProblem(sessionId, name, +number, platform)
        ),
      ]);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["problemList", sessionId]);
        successCallback?.();
      }
    }
  );

  return { isLoading, edit: mutate };
}
