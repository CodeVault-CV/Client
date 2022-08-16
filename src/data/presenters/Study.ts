import Study, { StudyListItem } from "../../core/types/Study";
import IStudyPresenter from "./interfaces/iStudy";
import IStudyUseCase from "../../core/useCases/interfaces/iStudy";

class StudyPresenter implements IStudyPresenter {
  constructor(private readonly useCase: IStudyUseCase) {}

  createStudy(studyName: string, repoName: string): Promise<Study> {
    return this.useCase.createStudy(studyName, repoName);
  }
  updateStudy(study: { id: string; name: string }): Promise<Study> {
    return this.useCase.updateStudy(study);
  }
  getStudy(studyId: string): Promise<Study> {
    return this.useCase.getStudy(studyId);
  }
  getStudyList(): Promise<StudyListItem[]> {
    return this.useCase.getStudyList();
  }
  deleteStudy(studyId: string): Promise<boolean> {
    return this.useCase.deleteStudy(studyId);
  }
}

export default StudyPresenter;