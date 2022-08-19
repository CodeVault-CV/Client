import IMemberEntity from "./iMember";
import ISessionEntity from "./iSession";

export interface IStudyData {
  id: string;
  members: IMemberEntity[];
  leader: string;
  name: string;
  url: string;
}

export interface IStudyPreviewEntity {
  id: string;
  name: string; 
}

export default interface IStudyEntity {
  id: string;
  members: IMemberEntity[];
  leader: string;
  name: string;
  url: string;
  sessions: ISessionEntity[];
}
