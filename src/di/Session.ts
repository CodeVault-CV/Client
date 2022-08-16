import SessionUseCase from "../core/useCases/Session";
import SessionPresenter from "../data/presenters/Session";

const Session = new SessionPresenter(new SessionUseCase());

export default Session;