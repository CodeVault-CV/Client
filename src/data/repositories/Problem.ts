import ProblemDTO, { IProblemDTO, IProblemParams } from "../../core/dto/ProblemDTO";
import IProblemRepository from "../../core/useCases/repository-interfaces/iProblem";
import HTTP from "../infra/http";

export default class ProblemRepository implements IProblemRepository {
  async getProblemList(sessionId: number): Promise<IProblemDTO[]> {
    return await HTTP.get(`/problem/list/${sessionId}`).then(({ data }) =>
      data.map((el: IProblemParams) => new ProblemDTO(el))
    );
  }

  async createProblem(
    sessionId: number,
    name: string,
    number: number,
    platform: string
  ): Promise<IProblemDTO> {
    return await HTTP.post(`/problem`, {
      sessionId,
      name,
      number,
      platform,
    }).then(({ data }) => new ProblemDTO(data));
  }

  async deleteProblem(problemId: number): Promise<boolean> {
    return await HTTP.deleteRequest(`/problem/${String(problemId)}`).then(
      ({ status }) => status === 200
    );
  }
}
