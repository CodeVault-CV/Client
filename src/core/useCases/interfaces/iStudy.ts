import Study, { StudyListItem } from "../../types/Study";

export default interface IStudyUseCase {
  createStudy(studyName: string, repoName: string): Promise<Study>;
  updateStudy(study: { id: string; name: string }): Promise<Study>;
  getStudy(studyId: string): Promise<Study>;
  getStudyList(): Promise<StudyListItem[]>;
  deleteStudy(studyId: string): Promise<boolean>;
  checkStudyLeader(studyId: string): Promise<boolean>; 
}