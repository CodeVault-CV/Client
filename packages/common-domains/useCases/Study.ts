import IStudyUseCase from './interfaces/iStudy';
import IMemberEntity from '../entities/interfaces/iMember';
import IStudyRepository from './repository-interfaces/iStudy';
import IStudyEntity, { IStudyPreviewEntity } from '../entities/interfaces/iStudy';
import ISessionRepository from './repository-interfaces/iSession';
import Study from '../entities/Study';

class StudyUseCase implements IStudyUseCase {
  constructor(private readonly studyRepo: IStudyRepository, private readonly sessionRepo: ISessionRepository) {}

  async createStudy(studyName: string, repoName: string): Promise<IStudyEntity> {
    const studyDTO = await this.studyRepo.createStudy(studyName, repoName);
    const studyEntity = new Study(studyDTO);
    return studyEntity;
  }

  async updateStudy(study: { id: string; name: string }): Promise<IStudyEntity> {
    const [studyDTO, sessionDTOList] = await Promise.all([
      this.studyRepo.updateStudy(study),
      this.sessionRepo.getSessionList(study.id),
    ]);

    const studyEntity = new Study(studyDTO).pushSessions(sessionDTOList);
    return studyEntity;
  }

  async getStudy(studyId: string): Promise<IStudyEntity> {
    const [studyDTO, sessionDTOList] = await Promise.all([
      this.studyRepo.getStudy(studyId),
      this.sessionRepo.getSessionList(studyId),
    ]);

    const studyEntity = new Study(studyDTO).pushSessions(sessionDTOList);
    return studyEntity;
  }

  async getStudyList(): Promise<IStudyPreviewEntity[]> {
    return await this.studyRepo.getStudyList();
  }

  async deleteStudy(studyId: string): Promise<boolean> {
    return await this.studyRepo.deleteStudy(studyId);
  }

  async checkStudyLeader(studyId: string): Promise<boolean> {
    return await this.studyRepo.checkStudyLeader(studyId);
  }

  async searchStudyMember(studyId: string, userName: string): Promise<IMemberEntity[]> {
    return await this.studyRepo.searchStudyMember(studyId, userName);
  }

  async addStudyMember(studyId: string, userName: string): Promise<{ status: number; message: string }> {
    return await this.studyRepo.addStudyMember(studyId, userName);
  }
}

export default StudyUseCase;
