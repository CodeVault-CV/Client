export interface ISolvedParams {
  solve: boolean;
  solutionId: number;
  userId: string;
  name: string;
  imageUrl: string;
  language: string;
}

export interface ISolvedDTO {
  solve: boolean;
  solutionId: number;
  userId: string;
  name: string;
  imageUrl: string;
  language: string;
}

export default class SolutionDTO implements ISolvedDTO {
  readonly solve: boolean;
  readonly solutionId: number;
  readonly userId: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly language: string;

  constructor(params: ISolvedParams) {
    this.solve = params.solve;
    this.solutionId = params.solutionId;
    this.userId = params.userId;
    this.name = params.name;
    this.imageUrl = params.imageUrl;
    this.language = params.language;
  }
}
