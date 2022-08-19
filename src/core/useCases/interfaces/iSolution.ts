import IReviewEntity from "../../entities/interfaces/iReview";
import { ISolutionEntity, ISolvedEntity } from "../../entities/interfaces/iSolution";

export default interface ISolutionUseCase {
  createSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionEntity>;
  getSolutionList(problemId: number): Promise<ISolvedEntity[]>;
  getSolution(problemId: number): Promise<ISolutionEntity>;
  updateSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionEntity>;
  deleteSolution(solutionId: number): Promise<boolean>;

  getReviews(solutionId: number): Promise<IReviewEntity[]>;
  createReview(solutionId: number, content: string): Promise<IReviewEntity>;
  updateReview(reviewId: number, content: string): Promise<IReviewEntity>;
  deleteReview(reviewId: number): Promise<boolean>;
}
