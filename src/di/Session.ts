import SessionUseCase from "../core/useCases/Session";
import SessionPresenter from "../data/presenters/Session";
import ProblemRepository from "../data/repositories/Problem";
import SessionRepository from "../data/repositories/Session";
import SolutionRepository from "../data/repositories/Solution";

const sessionUseCase = new SessionUseCase(
  new SessionRepository(),
  new ProblemRepository(),
  new SolutionRepository()
);
const Session = new SessionPresenter(sessionUseCase);

export default Session;
