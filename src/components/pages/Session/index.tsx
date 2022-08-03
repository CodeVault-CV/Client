import { Navigate, useParams } from "react-router-dom";

import Session from "./Session";

export default function SessionContainer() {
  const { sessionId } = useParams();
  if (sessionId === undefined) {
    return <Navigate to="/notfound" replace={true} />;
  }

  return <Session sessionId={+sessionId} />;
}