import IMemberEntity from "../../../domains/entities/interfaces/iMember";
import IStudyEntity, { IStudyPreviewEntity } from "../../../domains/entities/interfaces/iStudy";

export default interface IStudyPresenter {
  createStudy(studyName: string, repoName: string): Promise<IStudyEntity>;
  updateStudy(study: { id: string; name: string }): Promise<IStudyEntity>;
  getStudy(studyId: string): Promise<IStudyEntity>;
  getStudyList(): Promise<IStudyPreviewEntity[]>;
  deleteStudy(studyId: string): Promise<boolean>;
  searchStudyMember(studyId: string, userName: string): Promise<IMemberEntity[]>;
  addStudyMember(studyId: string, userName: string): Promise<{ status: number; message: string }>;
}