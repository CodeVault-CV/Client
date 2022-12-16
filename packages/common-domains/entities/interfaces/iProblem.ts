import { ISolvedMemberEntity } from './iMember';

export interface IProblemData {
  id: number;
  number: string;
  name: string;
  platform: string;
  url: string;
}

export default interface IProblemEntity {
  id: number;
  number: string;
  name: string;
  platform: string;
  url: string;
  solvedMembers: ISolvedMemberEntity[];
}
