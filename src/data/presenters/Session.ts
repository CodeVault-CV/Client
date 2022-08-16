import Session from "../../core/types/Session";
import ISessionUseCase from "../../core/useCases/interfaces/iSession";
import ISessionPresenter from "./interfaces/iSession";

class SessionPresenter implements ISessionPresenter {
  constructor(private readonly useCase: ISessionUseCase) {}

  createSession(studyId: string, name: string, start: Date, end: Date): Promise<Session> {
    return this.useCase.createSession(studyId, name, start, end);
  }
  updateSession(session: Session): Promise<Session> {
    return this.useCase.updateSession(session);
  }
  getSession(sessionId: number): Promise<Session> {
    return this.useCase.getSession(sessionId);
  }
  getSessionList(studyId: string): Promise<Session[]> {
    return this.useCase.getSessionList(studyId);
  }
  deleteSession(sessionId: number): Promise<boolean> {
    return this.useCase.deleteSession(sessionId);
  }
}

export default SessionPresenter;
