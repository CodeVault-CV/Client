import SolutionUseCase from "../core/useCases/Solution";
import SolutionPresenter from "../data/presenters/Solution";
import SolutionRepository from "../data/repositories/Solution";

const solutionRepo = new SolutionRepository();
const solutionUseCase = new SolutionUseCase(solutionRepo);

const Solution = new SolutionPresenter(solutionUseCase);

export default Solution;