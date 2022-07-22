import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getStudy } from "../../../api";
import Loading from "../../blocks/Loading";
import StudyInfo from "./StudyInfo";

export default function StudyInfoContainer() {
  const { studyId } = useParams();
  const { isLoading, data } = useQuery(["study", studyId], () =>
    getStudy(studyId).then((res) => res.data)
  );

  if (isLoading) {
    return <Loading />;
  }

  return <StudyInfo />;
}
