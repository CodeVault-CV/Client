import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Study from "../../di/Study";

export default function useDeleteStudy() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation((id: string) => Study.deleteStudy(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["studyList"]);
      navigate("/");
    },
  });

  return {
    isLoading,
    deleteStudy: mutate,
  };
}
