import ISessionEntity from "../entities/interfaces/iSession";
import ISessionUseCase from "./interfaces/iSession";
import ISessionRepository from "./repository-interfaces/iSession";

class SessionUseCase implements ISessionUseCase {
  constructor(private readonly sessionRepo: ISessionRepository) {}

  async createSession(studyId: string, name: string, start: Date, end: Date): Promise<ISessionEntity> {
    return await this.sessionRepo.createSession(studyId, name, start, end);
  }

  async updateSession(session: ISessionEntity): Promise<ISessionEntity> {
    return await this.sessionRepo.updateSession(session);
  }

  async getSession(sessionId: number): Promise<ISessionEntity> {
    return await this.sessionRepo.getSession(sessionId);
  }

  async getSessionList(studyId: string): Promise<ISessionEntity[]> {
    return await this.sessionRepo.getSessionList(studyId);
  }

  async deleteSession(sessionId: number): Promise<boolean> {
    return await this.sessionRepo.deleteSession(sessionId);
  }
}

export default SessionUseCase;
