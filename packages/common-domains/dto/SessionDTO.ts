export interface ISessionParams {
  id: number;
  name: string;
  start: Date;
  end: Date;
}

export interface ISessionDTO {
  id: number;
  name: string;
  start: Date;
  end: Date;
}

export default class SessionDTO implements ISessionDTO {
  readonly id: number;

  readonly name: string;

  readonly start: Date;

  readonly end: Date;

  constructor(params: ISessionParams) {
    this.id = params.id;
    this.name = params.name;
    this.start = new Date(params.start);
    this.end = new Date(params.end);
  }
}
