import HTTP from "../../data/infra/http";
import Problem from "../types/Problem";
import IProblemUseCase from "./interfaces/iProblem";

export default class ProblemUseCase implements IProblemUseCase {
  async getProblemList(sessionId: number): Promise<Problem[]> {
    return await HTTP.get(`/problem/list/${sessionId}`).then(({ data }) => data as Problem[]);
  }

  async createProblem(
    sessionId: number,
    name: string,
    number: number,
    platform: string
  ): Promise<Problem> {
    return await HTTP.post(`/problem`, {
      sessionId,
      name,
      number,
      platform,
    }).then(({ data }) => data as Problem);
  }

  async deleteProblem(problemId: number): Promise<boolean> {
    return await HTTP.deleteRequest(`/problem/${String(problemId)}`).then(
      ({ status }) => status === 200
    );
  }
}
