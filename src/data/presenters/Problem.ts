import Problem from "../../core/types/Problem";
import IProblemUseCase from "../../core/useCases/interfaces/iProblem";
import iProblemPresenter from "./interfaces/iProblem";

export default class ProblemPresenter implements iProblemPresenter {
  constructor(private readonly useCase: IProblemUseCase) {}

  async getProblemList(sessionId: number): Promise<Problem[]> {
    return await this.useCase.getProblemList(sessionId);
  }

  async createProblem(
    sessionId: number,
    name: string,
    number: number,
    platform: string
  ): Promise<Problem> {
    return await this.useCase.createProblem(sessionId, name, number, platform);
  }

  async deleteProblem(problemId: number): Promise<boolean> {
    return await this.useCase.deleteProblem(problemId);
  }
}
