import IProblemEntity from "./iProblem";

export interface ISessionData {
  id: number;
  name: string;
  start: Date;
  end: Date;
}

export default interface ISessionEntity {
  id: number;
  name: string;
  start: Date;
  end: Date;
  problems: IProblemEntity[];
}