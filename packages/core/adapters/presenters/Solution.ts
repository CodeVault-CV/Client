import IReviewEntity from "../../domains/entities/interfaces/iReview";
import ISolutionEntity from "../../domains/entities/interfaces/iSolution";
import ISolutionUseCase from "../../domains/useCases/interfaces/iSolution";
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

  async createReview(solutionId: number, content: string): Promise<IReviewEntity> {
    return await this.useCase.createReview(solutionId, content);
  }
  async updateReview(reviewId: number, content: string): Promise<IReviewEntity> {
    return await this.useCase.updateReview(reviewId, content);
  }
  async deleteReview(reviewId: number): Promise<boolean> {
    return await this.useCase.deleteReview(reviewId);
  }
}
