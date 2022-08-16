import Session from "../../types/Session";

export default interface ISessionUseCase {
  createSession(studyId: string, name: string, start: Date, end: Date): Promise<Session>;
  updateSession(session: Session): Promise<Session>;
  getSession(sessionId: number): Promise<Session>;
  getSessionList(studyId: string): Promise<Session[]>;
  deleteSession(sessionId: number): Promise<boolean>;
}