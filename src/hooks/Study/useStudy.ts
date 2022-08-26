import { useQuery } from "@tanstack/react-query";
import Study from "../../di/Study";
import { useAuth } from "../../hoc/AuthContext";

export default function useStudy(studyId: string) {
  const userId = useAuth().userId;
  const { isLoading, data: study } = useQuery(["study", studyId], () => Study.getStudy(studyId), {
    suspense: true,
  });
  const isLeader = userId === study?.leader;

  return { isLoading, study, isLeader };
}
