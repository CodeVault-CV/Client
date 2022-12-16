import IReviewEntity from '../entities/interfaces/iReview';
import ISolutionEntity from '../entities/interfaces/iSolution';
import Solution from '../entities/Solution';
import ISolutionUseCase from './interfaces/iSolution';
import IReviewRepository from './repository-interfaces/iReview';
import ISolutionRepository from './repository-interfaces/iSolution';

export default class SolutionUseCase implements ISolutionUseCase {
  constructor(private readonly solutionRepo: ISolutionRepository, private readonly reviewRepo: IReviewRepository) {}

  // Solution
  async createSolution(problemId: number, code: string, readMe: string, language: string): Promise<ISolutionEntity> {
    const solutionDTO = await this.solutionRepo.createSolution(problemId, code, readMe, language);
    const solutionEntity = new Solution(solutionDTO);
    return solutionEntity;
  }

  async getSolution(problemId: number): Promise<ISolutionEntity> {
    const solutionDTO = await this.solutionRepo.getSolution(problemId);
    const solutionEntity = new Solution(solutionDTO);

    const reviewDTOList = await this.reviewRepo.getReviews(solutionEntity.id);
    solutionEntity.pushReviews(reviewDTOList);

    return solutionEntity;
  }

  async updateSolution(problemId: number, code: string, readMe: string, language: string): Promise<ISolutionEntity> {
    const solutionDTO = await this.solutionRepo.updateSolution(problemId, code, readMe, language);
    const solutionEntity = new Solution(solutionDTO);

    const reviewDTOList = await this.reviewRepo.getReviews(solutionEntity.id);
    solutionEntity.pushReviews(reviewDTOList);

    return solutionEntity;
  }

  async deleteSolution(solutionId: number): Promise<boolean> {
    return await this.solutionRepo.deleteSolution(solutionId);
  }

  // Review
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
