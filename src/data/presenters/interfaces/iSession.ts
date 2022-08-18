import { ISessionParams } from "../../../core/dto/SessionDTO";
import ISessionEntity from "../../../core/entities/interfaces/iSession";

export default interface ISessionPresenter {
  createSession(studyId: string, name: string, start: Date, end: Date): Promise<ISessionEntity>;
  updateSession(session: ISessionParams): Promise<ISessionEntity>;
  getSession(sessionId: number): Promise<ISessionEntity>;
  getSessionList(studyId: string): Promise<ISessionEntity[]>;
  deleteSession(sessionId: number): Promise<boolean>;
}