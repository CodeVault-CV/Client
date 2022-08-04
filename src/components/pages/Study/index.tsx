import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { getStudy } from "../../../api";
import Loading from "../../blocks/Loading";
import Study from "./Study";

export default function StudyContainer() {
  const { studyId } = useParams();
  const { isLoading, data: study } = useQuery(["study", studyId], () =>
    getStudy(studyId).then((res) => res.data)
  );
  if (studyId === undefined) {
    return <Navigate to="/notfound" replace={true} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return <Study study={study} studyId={studyId} />;
}
