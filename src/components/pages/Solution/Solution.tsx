import Wrapper from "../../blocks/Wrapper";
import SolutionForm from "./SolutionForm";

export default function Solution({ id }: { id: number }) {
  return (
    <Wrapper>
      <SolutionForm id={id} />
    </Wrapper>
  );
}
