import IReviewEntity from './interfaces/iReview';
import ISolutionEntity, { ISolutionData } from './interfaces/iSolution';

export default class Solution implements ISolutionEntity {
  private readonly _id: number;

  private readonly _code: string;

  private readonly _readMe: string;

  private readonly _date: Date;

  private readonly _userId: string;

  private readonly _userName: string;

  private readonly _language: string;

  private _reviews: IReviewEntity[];

  constructor(params: ISolutionData) {
    this._id = params.id;
    this._code = params.code;
    this._readMe = params.readMe;
    this._date = params.date;
    this._userId = params.userId;
    this._userName = params.userName;
    this._language = params.language;
    this._reviews = [];
  }

  pushReviews(problems: IReviewEntity[]) {
    this._reviews = this._reviews.concat(problems);
    return this;
  }

  get id() {
    return this._id;
  }

  get code() {
    return this._code;
  }

  get readMe() {
    return this._readMe;
  }

  get date() {
    return this._date;
  }

  get userId() {
    return this._userId;
  }

  get userName() {
    return this._userName;
  }

  get language() {
    return this._language;
  }

  get reviews() {
    return this._reviews;
  }
}
