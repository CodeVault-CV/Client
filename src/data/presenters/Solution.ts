import { ISolutionEntity, ISolvedEntity } from "../../core/entities/interfaces/iSolution";
import ISolutionUseCase from "../../core/useCases/interfaces/iSolution";
import ISolutionPresenter from "./interfaces/iSolution";

export default class SolutionPresenter implements ISolutionPresenter {
  constructor(private readonly useCase: ISolutionUseCase) {}

  async createSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionEntity> {
    return await this.useCase.createSolution(problemId, code, readMe, language);
  }

  async getSolutionList(problemId: number): Promise<ISolvedEntity[]> {
    return await this.useCase.getSolutionList(problemId);
  }

  async getSolution(problemId: number): Promise<ISolutionEntity> {
    return await this.useCase.getSolution(problemId);
  }

  async updateSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionEntity> {
    return await this.useCase.updateSolution(problemId, code, readMe, language);
  }

  async deleteSolution(solutionId: number): Promise<boolean> {
    return await this.useCase.deleteSolution(solutionId);
  }
}
