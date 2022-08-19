import { ISolutionEntity, ISolutionDataEntity } from "../../core/entities/interfaces/iSolution";
import ISolutionRepository from "../../core/useCases/repository-interfaces/iSolution";
import HTTP from "../infra/http";

export default class SolutionRepository implements ISolutionRepository {
  async createSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionEntity> {
    return await HTTP.post(`/solution`, { problemId, code, readMe, language }).then(
      ({ data }) => data
    );
  }

  async getSolutionList(problemId: number): Promise<ISolutionDataEntity[]> {
    return await HTTP.get(`/solution/list/${problemId}`).then(({ data }) => data);
  }

  async getSolution(problemId: number): Promise<ISolutionEntity> {
    return await HTTP.get(`/solution/${problemId}`).then(({ data }) => data);
  }

  async updateSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionEntity> {
    return await HTTP.put(`/solution/${problemId}`, {
      problemId,
      code,
      readMe,
      language,
    }).then(({ data }) => data);
  }

  async deleteSolution(solutionId: number): Promise<boolean> {
    return await HTTP.deleteRequest(`/solution/${String(solutionId)}`).then(
      ({ status }) => status === 200
    );
  }
}
