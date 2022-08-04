import { useQuery } from "@tanstack/react-query";
import { getStudyList } from "../../api";
import Study from "../../types/Study";

export default function useStudyList() {
  const { isLoading, data } = useQuery<Study[]>(
    ["studyList"],
    () => getStudyList().then((res) => res.data),
    {
      retry: false,
      // useErrorBoundary: true,
    }
  );

  return {
    isLoading,
    studyList: data,
  };
}
