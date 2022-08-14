import Wrapper from "../../blocks/Wrapper";
import SolutionForm from "./SolutionForm";

export default function Solve({ id }: { id: number }) {
  return (
    <Wrapper>
      <SolutionForm id={id} />
    </Wrapper>
  );
}
