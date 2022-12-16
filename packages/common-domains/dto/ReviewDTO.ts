export interface IReviewParams {
  id: number;
  userId: string;
  userName: string;
  content: string;
  createdTime: Date;
  updatedTime: Date;
}

export interface IReviewDTO {
  id: number;
  userId: string;
  userName: string;
  content: string;
  createdTime: Date;
  updatedTime: Date;
}

export default class ReviewDTO implements IReviewDTO {
  readonly id: number;

  readonly userId: string;

  readonly userName: string;

  readonly content: string;

  readonly createdTime: Date;

  readonly updatedTime: Date;

  constructor(params: IReviewParams) {
    this.id = params.id;
    this.userId = params.userId;
    this.userName = params.userName;
    this.content = params.content;
    this.createdTime = params.createdTime;
    this.updatedTime = params.updatedTime;
  }
}
