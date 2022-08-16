import StudyUseCase from "../core/useCases/Study";
import StudyPresenter from "../data/presenters/Study";

const Study = new StudyPresenter(new StudyUseCase());

export default Study;
