import { Navigate, useParams } from "react-router-dom";
import Study from "./Study";

export default function StudyContainer() {
  const { studyId } = useParams();
  if (studyId === undefined) {
    return <Navigate to="/notfound" replace={true} />;
  }

  return <Study studyId={studyId} />;
}
