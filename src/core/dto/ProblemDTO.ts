export interface IProblemParams {
  id: number;
  number: string;
  name: string;
  platform: string;
  url: string;
}

export interface IProblemDTO {
  id: number;
  number: string;
  name: string;
  platform: string;
  url: string;
}

export default class ProblemDTO implements IProblemDTO {
  readonly id: number;
  readonly number: string;
  readonly name: string;
  readonly platform: string;
  readonly url: string;

  constructor(params: IProblemParams) {
    this.id = params.id;
    this.number = params.number;
    this.name = params.name;
    this.platform = params.platform;
    this.url = params.url;
  }
}
