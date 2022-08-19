import SolutionUseCase from "../core/useCases/Solution";
import SolutionPresenter from "../data/presenters/Solution";
import ReviewRepository from "../data/repositories/Review";
import SolutionRepository from "../data/repositories/Solution";

const solutionUseCase = new SolutionUseCase(new SolutionRepository(), new ReviewRepository());

const Solution = new SolutionPresenter(solutionUseCase);

export default Solution;
