import IStudyPresenter from "./interfaces/iStudy";
import IStudyUseCase from "../../core/useCases/interfaces/iStudy";
import IMemberEntity from "../../core/entities/interfaces/iMember";
import { IStudyPreviewDTO } from "../../core/dto/StudyDTO";
import IStudyEntity from "../../core/entities/interfaces/iStudy";

class StudyPresenter implements IStudyPresenter {
  constructor(private readonly useCase: IStudyUseCase) {}

  async createStudy(studyName: string, repoName: string): Promise<IStudyEntity> {
    return await this.useCase.createStudy(studyName, repoName);
  }
  async updateStudy(study: { id: string; name: string }): Promise<IStudyEntity> {
    return await this.useCase.updateStudy(study);
  }
  async getStudy(studyId: string): Promise<IStudyEntity> {
    return await this.useCase.getStudy(studyId);
  }
  async getStudyList(): Promise<IStudyPreviewDTO[]> {
    return await this.useCase.getStudyList();
  }
  async deleteStudy(studyId: string): Promise<boolean> {
    return await this.useCase.deleteStudy(studyId);
  }
  async checkStudyLeader(studyId: string): Promise<boolean> {
    return await this.useCase.checkStudyLeader(studyId);
  }
  async searchStudyMember(studyId: string, userName: string): Promise<IMemberEntity[]> {
    return await this.useCase.searchStudyMember(studyId, userName);
  }
  async addStudyMember(
    studyId: string,
    userName: string
  ): Promise<{ status: number; message: string }> {
    return await this.useCase.addStudyMember(studyId, userName);
  }
}

export default StudyPresenter;
