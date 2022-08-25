import IReviewEntity from "../../../core/entities/interfaces/iReview";
import ISolutionEntity from "../../../core/entities/interfaces/iSolution";

export default interface ISolutionPresenter {
  createSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionEntity>;
  getSolution(problemId: number): Promise<ISolutionEntity>;
  updateSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionEntity>;
  deleteSolution(solutionId: number): Promise<boolean>;

  createReview(solutionId: number, content: string): Promise<IReviewEntity>;
  updateReview(reviewId: number, content: string): Promise<IReviewEntity>;
  deleteReview(reviewId: number): Promise<boolean>;
}
