import ReviewDTO, { IReviewDTO, IReviewParams } from "../../core/dto/ReviewDTO";
import IReviewRepository from "../../core/useCases/repository-interfaces/iReview";
import HTTP from "../infra/http";

export default class ReviewRepository implements IReviewRepository {
  async getReviews(solutionId: number): Promise<IReviewDTO[]> {
    return await HTTP.get(`/review/${solutionId}`).then(({ data }) =>
      data.map((el: IReviewParams) => new ReviewDTO(el))
    );
  }
  async createReview(solutionId: number, content: string): Promise<IReviewDTO> {
    return await HTTP.post(`/review`, { solutionId, content }).then(
      ({ data }) => new ReviewDTO(data)
    );
  }
  async updateReview(reviewId: number, content: string): Promise<IReviewDTO> {
    return await HTTP.put(`/review/${reviewId}`, { content }).then(
      ({ data }) => new ReviewDTO(data)
    );
  }
  async deleteReview(reviewId: number): Promise<boolean> {
    return await HTTP.deleteRequest(`/review/${reviewId}`).then(({ status }) => status === 200);
  }
}
