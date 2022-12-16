import { IMemberDTO } from './MemberDTO';

export interface IStudyParams {
  id: string;
  members: IMemberDTO[];
  name: string;
  leader: string;
  url: string;
}

export interface IStudyDTO {
  id: string;
  members: IMemberDTO[];
  name: string;
  leader: string;
  url: string;
}

export type IStudyPreviewDTO = Omit<IStudyDTO, 'members' | 'url' | 'leader'>;
export class StudyPreviewDTO implements IStudyPreviewDTO {
  readonly id: string;

  readonly name: string;

  constructor(params: Omit<IStudyParams, 'members' | 'url' | 'leader'>) {
    this.id = params.id;
    this.name = params.name;
  }
}

export default class StudyDTO implements IStudyDTO {
  readonly id: string;

  readonly members: IMemberDTO[];

  readonly name: string;

  readonly url: string;

  readonly leader: string;

  constructor(params: IStudyParams) {
    this.id = params.id;
    this.members = params.members;
    this.name = params.name;
    this.url = params.url;
    this.leader = params.leader;
  }
}
