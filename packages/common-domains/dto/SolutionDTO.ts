export interface ISolutionParams {
  id: number;
  code: string;
  readMe: string;
  date: Date;
  userId: string;
  userName: string;
  language: string;
}

export interface ISolutionDTO {
  id: number;
  code: string;
  readMe: string;
  date: Date;
  userId: string;
  userName: string;
  language: string;
}

export default class SolutionDTO implements ISolutionDTO {
  readonly id: number;

  readonly code: string;

  readonly readMe: string;

  readonly date: Date;

  readonly userId: string;

  readonly userName: string;

  readonly language: string;

  constructor(params: ISolutionParams) {
    this.id = params.id;
    this.code = params.code;
    this.readMe = params.readMe;
    this.date = params.date;
    this.userId = params.userId;
    this.userName = params.userName;
    this.language = params.language;
  }
}
