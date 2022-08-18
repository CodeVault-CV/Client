import { ISessionParams } from "../../core/dto/SessionDTO";
import ISessionEntity from "../../core/entities/interfaces/iSession";
import ISessionUseCase from "../../core/useCases/interfaces/iSession";
import ISessionPresenter from "./interfaces/iSession";

class SessionPresenter implements ISessionPresenter {
  constructor(private readonly useCase: ISessionUseCase) {}

  async createSession(studyId: string, name: string, start: Date, end: Date): Promise<ISessionEntity> {
    return await this.useCase.createSession(studyId, name, start, end);
  }

  async updateSession(session: ISessionParams): Promise<ISessionEntity> {
    return await this.useCase.updateSession(session);
  }

  async getSession(sessionId: number): Promise<ISessionEntity> {
    return await this.useCase.getSession(sessionId);
  }

  async getSessionList(studyId: string): Promise<ISessionEntity[]> {
    return await this.useCase.getSessionList(studyId);
  }

  async deleteSession(sessionId: number): Promise<boolean> {
    return await this.useCase.deleteSession(sessionId);
  }
}

export default SessionPresenter;
