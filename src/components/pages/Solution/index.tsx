import { Navigate, useParams } from "react-router-dom";
import SolutionViewer from "./SolutionViewer";

export default function SolutionContainer() {
  const { solutionId } = useParams();
  if (solutionId === undefined) {
    return <Navigate to="/notfound" replace={true} />;
  }

  return <SolutionViewer id={+solutionId}/>;
}
