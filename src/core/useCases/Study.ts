import Study, { StudyListItem } from "../types/Study";
import IStudyUseCase from "./interfaces/iStudy";
import HTTP from "../../data/infra/http";

class StudyUseCase implements IStudyUseCase {
  async createStudy(studyName: string, repoName: string): Promise<Study> {
    return await HTTP.post(`/study`, { studyName: studyName, repoName: repoName }).then(
      ({ data }) => data as Study
    );
  }

  async updateStudy(study: { id: string; name: string }): Promise<Study> {
    return await HTTP.put("/study", study).then(({ data }) => data as Study);
  }

  async getStudy(studyId: string): Promise<Study> {
    return await HTTP.get(`/study/${studyId}`).then(({ data }) => data as Study);
  }

  async getStudyList(): Promise<StudyListItem[]> {
    return await HTTP.get(`/study/list`).then(({ data }) => data as StudyListItem[]);
  }

  async deleteStudy(studyId: string): Promise<boolean> {
    return await HTTP.deleteRequest(`/study/${studyId}`).then(({ status }) => status === 200);
  }
}

export default StudyUseCase;
