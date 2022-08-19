import Study, { StudyListItem } from "../../core/types/Study";
import IStudyPresenter from "./interfaces/iStudy";
import IStudyUseCase from "../../core/useCases/interfaces/iStudy";
import IUserEntity from "../../core/entities/interfaces/iUser";

class StudyPresenter implements IStudyPresenter {
  constructor(private readonly useCase: IStudyUseCase) {}

  async createStudy(studyName: string, repoName: string): Promise<Study> {
    return await this.useCase.createStudy(studyName, repoName);
  }
  async updateStudy(study: { id: string; name: string }): Promise<Study> {
    return await this.useCase.updateStudy(study);
  }
  async getStudy(studyId: string): Promise<Study> {
    return await this.useCase.getStudy(studyId);
  }
  async getStudyList(): Promise<StudyListItem[]> {
    return await this.useCase.getStudyList();
  }
  async deleteStudy(studyId: string): Promise<boolean> {
    return await this.useCase.deleteStudy(studyId);
  }
  async checkStudyLeader(studyId: string): Promise<boolean> {
    return await this.useCase.checkStudyLeader(studyId);
  }
  async searchStudyMember(studyId: string, userName: string): Promise<IUserEntity[]> {
    return await this.useCase.searchStudyMember(studyId, userName);
  }
  async addStudyMember(studyId: string, userName: string):  Promise<{ status: number, message: string }> {
    return await this.useCase.addStudyMember(studyId, userName);
  }
}

export default StudyPresenter;