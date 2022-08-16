import Session from "../types/Session";
import ISessionUseCase from "./interfaces/iSession";

class SessionUseCases implements ISessionUseCase {
  createSession(studyId: string, name: string, start: Date, end: Date): Promise<Session> {
    throw new Error("Method not implemented.");
  }
  updateSession(session: Session): Promise<Session> {
    throw new Error("Method not implemented.");
  }
  getSession(sessionId: number): Promise<Session> {
    throw new Error("Method not implemented.");
  }
  getSessionList(studyId: string): Promise<Session[]> {
    throw new Error("Method not implemented.");
  }
  deleteSession(sessionId: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}

export default SessionUseCases;