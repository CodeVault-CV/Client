import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSessionList, getStudy } from "../../../api";
import Loading from "../../blocks/Loading";
import Study from "./Study";

export default function StudyContainer() {
  const { studyId } = useParams();
  const { isLoading: isStudyLoading, data: study } = useQuery(["study", studyId], () =>
    getStudy(studyId).then((res) => res.data)
  );
  const { isLoading: isSessionListLoading, data: sessionList } = useQuery(["sessionList", studyId], () => (
    getSessionList(studyId).then(res => res.data)
  ));

  const isLoading = isStudyLoading || isSessionListLoading;

  if (isLoading) {
    return <Loading />;
  }

  return <Study study={study} sessionList={sessionList} />;
}
