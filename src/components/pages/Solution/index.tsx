import { Navigate, useParams } from "react-router-dom";
import Solution from "./Solution";

export default function SolutionContainer() {
  const { problemId } = useParams();
  if (problemId === undefined) {
    return <Navigate to="/notfound" replace={true} />;
  }

  return <Solution id={+problemId} />;
}
