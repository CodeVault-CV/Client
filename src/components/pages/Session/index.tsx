import { Navigate, useParams } from "react-router-dom";

import Session from "./Session";

export default function SessionContainer() {
  const { studyId, sessionId } = useParams();

  if (sessionId === undefined || studyId === undefined) {
    return <Navigate to="/notfound" replace={true} />;
  }

  return <Session sessionId={+sessionId} studyId={studyId} />;
}
