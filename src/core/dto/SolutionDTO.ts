export interface ISolutionParams {
  code: string;
  readMe: string;
  date: Date;
  id: string;
  name: string;
  language: string;
}

export interface ISolutionDTO {
  code: string;
  readMe: string;
  date: Date;
  id: string;
  name: string;
  language: string;
}

export default class SolutionDTO implements ISolutionDTO{
  readonly code: string;
  readonly readMe: string;
  readonly date: Date;
  readonly id: string;
  readonly name: string;
  readonly language: string;

  constructor(params: ISolutionParams) {
    this.code = params.code;
    this.readMe = params.readMe;
    this.date = params.date;
    this.id = params.id;
    this.name = params.name;
    this.language = params.language;
  }
}