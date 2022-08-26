import { Navigate, useParams } from "react-router-dom";

import Session from "./Session";
import useStudy from "../../../hooks/Study/useStudy";

export default function SessionContainer() {
  const { studyId, sessionId } = useParams();
  const { isLeader } = useStudy(studyId as string);

  if (sessionId === undefined) {
    return <Navigate to="/notfound" replace={true} />;
  }

  return <Session sessionId={+sessionId} isLeader={isLeader} />;
}