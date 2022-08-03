import { useQuery } from "@tanstack/react-query";
import { getStudyList } from "../api";
import Study from "../types/Study";

export default function useSessionList() {
  const { isLoading, isError, error, data } = useQuery(
    ["studyList"],
    () => getStudyList().then((res) => res.data),
    {
      onError: ({ response }) => {
        const { code, message } = response.data;
        alert(message);
      },
      retry: false,
    }
  );

  return {
    isLoading,
    isError,
    error: error?.response,
    studyList: data as Study[],
  };
}
