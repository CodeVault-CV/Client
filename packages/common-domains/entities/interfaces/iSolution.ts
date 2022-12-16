import IReviewEntity from './iReview';

export interface ISolvedEntity {
  solve: boolean;
  id: number;
  userId: string;
  userName: string;
  imageUrl: string;
  language: string;
}

export interface ISolutionData {
  id: number;
  code: string;
  readMe: string;
  date: Date;
  userId: string;
  userName: string;
  language: string;
}

export default interface ISolutionEntity {
  id: number;
  code: string;
  readMe: string;
  date: Date;
  userId: string;
  userName: string;
  language: string;
  reviews: IReviewEntity[];
}
