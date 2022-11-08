import SolutionDTO, { ISolutionDTO } from "../../domains/dto/SolutionDTO";
import SolvedDTO, { ISolvedDTO, ISolvedParams } from "../../domains/dto/SolvedDTO";
import ISolutionRepository from "../../domains/useCases/repository-interfaces/iSolution";
import HTTP from "../infra/http";

export default class SolutionRepository implements ISolutionRepository {
  async createSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionDTO> {
    return await HTTP.post(`/solution`, { problemId, code, readMe, language }).then(
      ({ data }) => new SolutionDTO(data)
    );
  }

  async getSolutionList(problemId: number): Promise<ISolvedDTO[]> {
    return await HTTP.get(`/solution/list/${problemId}`).then(({ data }) =>
      data.map((el: ISolvedParams) => new SolvedDTO(el))
    );
  }

  async getSolution(problemId: number): Promise<ISolutionDTO> {
    return await HTTP.get(`/solution/${problemId}`).then(({ data }) => new SolutionDTO(data));
  }

  async updateSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionDTO> {
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
