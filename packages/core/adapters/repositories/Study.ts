import MemberDTO, { IMemberDTO, IMemberParams } from "../../domains/dto/MemberDTO";
import StudyDTO, {
  IStudyDTO,
  IStudyParams,
  StudyPreviewDTO,
} from "../../domains/dto/StudyDTO";
import { IStudyPreviewEntity } from "../../domains/entities/interfaces/iStudy";
import IStudyRepository from "../../domains/useCases/repository-interfaces/iStudy";
import HTTP from "../infra/http";

export default class StudyRepository implements IStudyRepository {
  async createStudy(studyName: string, repoName: string): Promise<IStudyDTO> {
    return await HTTP.post(`/study`, { studyName: studyName, repoName: repoName }).then(
      ({ data }) => new StudyDTO(data)
    );
  }

  async updateStudy(study: { id: string; name: string }): Promise<IStudyDTO> {
    return await HTTP.put(`/study/${study.id}`, study).then(({ data }) => new StudyDTO(data));
  }

  async getStudy(studyId: string): Promise<IStudyDTO> {
    return await HTTP.get(`/study/${studyId}`).then(({ data }) => new StudyDTO(data));
  }

  async getStudyList(): Promise<IStudyPreviewEntity[]> {
    return await HTTP.get(`/study/list`).then(({ data }) =>
      data.map((el: Omit<IStudyParams, "members" | "url">) => new StudyPreviewDTO(el))
    );
  }

  async deleteStudy(studyId: string): Promise<boolean> {
    return await HTTP.deleteRequest(`/study/${studyId}`).then(({ status }) => status === 200);
  }

  async checkStudyLeader(studyId: string): Promise<boolean> {
    return await HTTP.get(`/study/leader/${studyId}`).then(({ status }) => status === 200);
  }

  async searchStudyMember(studyId: string, userName: string): Promise<IMemberDTO[]> {
    return await HTTP.get(`/study/member/list?name=${userName}&id=${studyId}`).then(({ data }) =>
      data.map((el: IMemberParams) => new MemberDTO(el))
    );
  }

  async addStudyMember(
    studyId: string,
    userName: string
  ): Promise<{ status: number; message: string }> {
    return await HTTP.post(`/study/member`, { studyId: studyId, member: userName });
  }
}
