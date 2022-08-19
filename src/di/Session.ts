import SessionUseCase from "../core/useCases/Session";
import SessionPresenter from "../data/presenters/Session";
import ProblemRepository from "../data/repositories/Problem";
import SessionRepository from "../data/repositories/Session";

const sessionUseCase = new SessionUseCase(
  new SessionRepository(), 
  new ProblemRepository()
);
const Session = new SessionPresenter(sessionUseCase);

export default Session;
