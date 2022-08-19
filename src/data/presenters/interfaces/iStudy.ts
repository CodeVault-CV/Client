import Study, { StudyListItem } from "../../../core/types/Study";
import IUserEntity from "../../../core/entities/interfaces/iUser";

export default interface IStudyPresenter {
  createStudy(studyName: string, repoName: string): Promise<Study>;
  updateStudy(study: { id: string; name: string }): Promise<Study>;
  getStudy(studyId: string): Promise<Study>;
  getStudyList(): Promise<StudyListItem[]>;
  deleteStudy(studyId: string): Promise<boolean>;
  searchStudyMember(studyId: string, userName: string): Promise<IUserEntity[]>;
  addStudyMember(studyId: string, userName: string):  Promise<{ status: number, message: string }>;
}
