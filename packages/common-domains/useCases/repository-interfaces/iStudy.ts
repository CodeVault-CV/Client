import { IMemberDTO } from '../../dto/MemberDTO';
import { IStudyDTO, IStudyPreviewDTO } from '../../dto/StudyDTO';

export default interface IStudyRepository {
  createStudy(studyName: string, repoName: string): Promise<IStudyDTO>;
  updateStudy(study: { id: string; name: string }): Promise<IStudyDTO>;
  getStudy(studyId: string): Promise<IStudyDTO>;
  getStudyList(): Promise<IStudyPreviewDTO[]>;
  deleteStudy(studyId: string): Promise<boolean>;
  checkStudyLeader(studyId: string): Promise<boolean>;
  searchStudyMember(studyId: string, userName: string): Promise<IMemberDTO[]>;
  addStudyMember(studyId: string, userName: string): Promise<{ status: number; message: string }>;
}
