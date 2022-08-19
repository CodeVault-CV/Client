import StudyUseCase from "../core/useCases/Study";
import StudyPresenter from "../data/presenters/Study";
import SessionRepository from "../data/repositories/Session";
import StudyRepository from "../data/repositories/Study";

const studyUseCase = new StudyUseCase(new StudyRepository(), new SessionRepository());
const Study = new StudyPresenter(studyUseCase);

export default Study;
