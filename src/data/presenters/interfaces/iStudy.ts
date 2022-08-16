import Study, { StudyListItem } from "../../../core/types/Study";

export default interface IStudyPresenter {
  createStudy(studyName: string, repoName: string): Promise<Study>;
  updateStudy(study: { id: string; name: string }): Promise<Study>;
  getStudy(studyId: string): Promise<Study>;
  getStudyList(): Promise<StudyListItem[]>;
  deleteStudy(studyId: string): Promise<boolean>;
}
