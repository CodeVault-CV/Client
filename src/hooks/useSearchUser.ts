import { useMutation } from "@tanstack/react-query";
import Study from "../di/Study";

export default function useSearchUser(studyId: string ) {
  const { isLoading, data, mutate } = useMutation((name: string) =>
    Study.searchStudyMember(studyId, name)
  );

  return {
    isLoading,
    users: data,
    searchUser: mutate
  }
}