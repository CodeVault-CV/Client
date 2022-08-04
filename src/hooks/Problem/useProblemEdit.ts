import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteProblem, createProblem } from "../../api";
import Problem from "../../types/Problem";

export default function useProblemEdit(
  sessionId: number,
  problemList: Problem[],
  successCallback?: (...props: any[]) => void
) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(
    (problems: (Problem & { isNew: boolean })[]) => {
      const new_id_set = new Set(problems.map(({ id }) => id));
      const new_problems = problems.filter(({ isNew }) => isNew);
      const deleted_problems = problemList.filter(({ id }) => !new_id_set.has(id));

      return Promise.all([
        ...deleted_problems.map(({ id }) => deleteProblem(id)),
        ...new_problems.map(({ name, number, platform }) =>
          createProblem(sessionId, name, +number, platform)
        ),
      ]);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["problemList", sessionId]);
        successCallback?.();
      },
    }
  );

  return { isLoading, edit: mutate };
}
