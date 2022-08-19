import { IReviewDTO } from "../../dto/ReviewDTO";

export default interface IReviewRepository {
  getReviews(solutionId: number): Promise<IReviewDTO[]>;
  createReview(solutionId: number, content: string): Promise<IReviewDTO>;
  updateReview(reviewId: number, content: string): Promise<IReviewDTO>;
  deleteReview(reviewId: number): Promise<boolean>;
}