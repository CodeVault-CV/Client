export default interface IReviewEntity {
  id: number;
  userId: string;
  userName: string;
  content: string;
  createdTime: Date;
  updatedTime: Date;
}
