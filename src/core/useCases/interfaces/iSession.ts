import { ISessionParams } from "../../dto/SessionDTO";
import ISessionEntity from "../../entities/interfaces/iSession";

export default interface ISessionUseCase {
  createSession(studyId: string, name: string, start: Date, end: Date): Promise<ISessionEntity>;
  updateSession(session: ISessionParams): Promise<ISessionEntity>;
  getSession(sessionId: number): Promise<ISessionEntity>;
  getSessionList(studyId: string): Promise<ISessionEntity[]>;
  deleteSession(sessionId: number): Promise<boolean>;
}