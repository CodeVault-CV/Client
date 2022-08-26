import Wrapper from "../../blocks/Wrapper";
import SolutionForm from "./SolutionForm";

export default function Solve({ problemId }: { problemId: number }) {
  return (
    <Wrapper>
      <SolutionForm problemId={problemId} />
    </Wrapper>
  );
}