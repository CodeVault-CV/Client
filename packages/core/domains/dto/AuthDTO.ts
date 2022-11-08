export interface IAuthParams {
  id: string;
  token: string;
}

export interface IAuthDTO {
  id: string;
  token: string;
}

export default class AuthDTO implements IAuthDTO {
  readonly id: string;
  readonly token: string;

  constructor(params: IAuthParams) {
    this.id = params.id;
    this.token = params.token;
  }
}
