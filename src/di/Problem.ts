import ProblemUseCase from "../core/useCases/Problem";
import ProblemPresenter from "../data/presenters/Problem";

const Problem = new ProblemPresenter(new ProblemUseCase());

export default Problem;