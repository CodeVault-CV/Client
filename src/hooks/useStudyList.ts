import { useQuery } from "@tanstack/react-query";
import { getStudyList } from "../api";
import Study from "../types/Study";

export default function useSessionList() {
  const { isLoading, isError, data } = useQuery(["studyList"], () =>
    getStudyList().then((res) => res.data)
  );

  return {
    isLoading,
    isError,
    studyList: data as Study[],
  };
}
