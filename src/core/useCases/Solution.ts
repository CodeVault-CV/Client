import IReviewEntity from "../entities/interfaces/iReview";
import { ISolutionEntity, ISolvedEntity } from "../entities/interfaces/iSolution";
import ISolutionUseCase from "./interfaces/iSolution";
import IReviewRepository from "./repository-interfaces/iReview";
import ISolutionRepository from "./repository-interfaces/iSolution";

export default class SolutionUseCase implements ISolutionUseCase {
  constructor(
    private readonly solutionRepo: ISolutionRepository,
    private readonly reviewRepo: IReviewRepository
  ) {}
  // Solution
  async createSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionEntity> {
    return await this.solutionRepo.createSolution(problemId, code, readMe, language);
  }
  async getSolutionList(problemId: number): Promise<ISolvedEntity[]> {
    return await this.solutionRepo.getSolutionList(problemId);
  }
  async getSolution(problemId: number): Promise<ISolutionEntity> {
    return await this.solutionRepo.getSolution(problemId);
  }
  async updateSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionEntity> {
    return await this.solutionRepo.updateSolution(problemId, code, readMe, language);
  }
  async deleteSolution(solutionId: number): Promise<boolean> {
    return await this.solutionRepo.deleteSolution(solutionId);
  }

  // Review
  async getReviews(solutionId: number): Promise<IReviewEntity[]> {
    return await this.reviewRepo.getReviews(solutionId);
  }
  async createReview(solutionId: number, content: string): Promise<IReviewEntity> {
    return await this.reviewRepo.createReview(solutionId, content);
  }
  async updateReview(reviewId: number, content: string): Promise<IReviewEntity> {
    return await this.reviewRepo.updateReview(reviewId, content);
  }
  async deleteReview(reviewId: number): Promise<boolean> {
    return await this.reviewRepo.deleteReview(reviewId);
  }
}
