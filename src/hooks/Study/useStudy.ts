import { useQuery } from "@tanstack/react-query";
import Study from "../../di/Study";

export default function useStudy(studyId: string) {
  const { isLoading, data: study } = useQuery(["study", studyId], () => Study.getStudy(studyId), {
    suspense: true,
  });

  return { isLoading, study };
}
