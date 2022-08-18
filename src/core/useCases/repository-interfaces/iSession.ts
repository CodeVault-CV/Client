import { ISessionDTO, ISessionParams } from "../../dto/SessionDTO";

export default interface ISessionRepository {
  createSession(studyId: string, name: string, start: Date, end: Date): Promise<ISessionDTO>;
  updateSession(session: ISessionParams): Promise<ISessionDTO>;
  getSession(sessionId: number): Promise<ISessionDTO>;
  getSessionList(studyId: string): Promise<ISessionDTO[]>;
  deleteSession(sessionId: number): Promise<boolean>;
}