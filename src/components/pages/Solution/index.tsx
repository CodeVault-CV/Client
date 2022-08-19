import { Navigate, useParams } from "react-router-dom";
import SolutionPage from "./Solution";

export default function SolutionPageContainer() {
  const { solutionId } = useParams();
  if (solutionId === undefined) {
    return <Navigate to="/notfound" replace={true} />;
  }

  return <SolutionPage solutionId={+solutionId}/>;
}
