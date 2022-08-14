import { Navigate, useParams } from "react-router-dom";
import Solve from "./Solve";

export default function SolveContainer() {
  const { problemId } = useParams();
  if (problemId === undefined) {
    return <Navigate to="/notfound" replace={true} />;
  }

  return <Solve id={+problemId} />;
}
