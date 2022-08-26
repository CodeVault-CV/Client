import { Navigate, useParams } from "react-router-dom";
import Study from "./Study";
import useStudy from "../../../hooks/Study/useStudy";

export default function StudyContainer() {
  const { studyId } = useParams();
  const { isLeader } = useStudy(studyId as string);

  if (studyId === undefined) {
    return <Navigate to="/notfound" replace={true} />;
  }

  return <Study studyId={studyId} isLeader={isLeader} />;
}
