import SessionUseCase from "../core/useCases/Session";
import SessionPresenter from "../data/presenters/Session";
import SessionRepository from "../data/repositories/Session";

const sessionRepo = new SessionRepository();
const sessionUseCase = new SessionUseCase(sessionRepo);
const Session = new SessionPresenter(sessionUseCase);

export default Session;