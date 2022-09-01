import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Study from "../../di/Study";

export default function useCreateStudy() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(
    ({ studyName, repoName }: { studyName: string; repoName: string }) =>
      Study.createStudy(studyName, repoName),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["studyList"]);
        navigate(`/study/${data.id}`);
      },
    }
  );

  return {
    isLoading,
    createStudy: mutate,
  };
}
