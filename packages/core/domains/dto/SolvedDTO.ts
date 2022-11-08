export interface ISolvedParams {
  solve: boolean;
  id: number;
  userId: string;
  userName: string;
  imageUrl: string;
  language: string;
}

export interface ISolvedDTO {
  solve: boolean;
  id: number;
  userId: string;
  userName: string;
  imageUrl: string;
  language: string;
}

export default class SolvedDTO implements ISolvedDTO {
  readonly solve: boolean;
  readonly id: number;
  readonly userId: string;
  readonly userName: string;
  readonly imageUrl: string;
  readonly language: string;

  constructor(params: ISolvedParams) {
    this.solve = params.solve;
    this.id = params.id;
    this.userId = params.userId;
    this.userName = params.userName;
    this.imageUrl = params.imageUrl;
    this.language = params.language;
  }
}
