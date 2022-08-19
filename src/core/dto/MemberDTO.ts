export interface IMemberParams {
  id: string;
  name: string;
  imageUrl: string;
  githubUrl: string;
}

export interface IMemberDTO {
  id: string;
  name: string;
  imageUrl: string;
  githubUrl: string;
}

export default class MemberDTO implements IMemberDTO {
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly githubUrl: string;

  constructor(params: IMemberParams) {
    this.id = params.id;
    this.name = params.name;
    this.imageUrl = params.imageUrl;
    this.githubUrl = params.githubUrl;
  }
}
