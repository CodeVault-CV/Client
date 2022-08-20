import { ISessionParams } from "../../core/dto/SessionDTO";
import { IProblemData } from "../../core/entities/interfaces/iProblem";
import ISessionEntity from "../../core/entities/interfaces/iSession";
import ISessionUseCase from "../../core/useCases/interfaces/iSession";
import ISessionPresenter from "./interfaces/iSession";

class SessionPresenter implements ISessionPresenter {
  constructor(private readonly useCase: ISessionUseCase) {}

  async updateProblemList(
    sessionId: number,
    prev: Omit<IProblemData, "url">[],
    cur: Omit<IProblemData, "url">[]
  ): Promise<boolean> {
    return await this.useCase.updateProblemList(sessionId, prev, cur);
  }
  async createSession(
    studyId: string,
    name: string,
    start: Date,
    end: Date
  ): Promise<ISessionEntity> {
    return await this.useCase.createSession(studyId, name, start, end);
  }
  async updateSession(session: ISessionParams): Promise<ISessionEntity> {
    return await this.useCase.updateSession(session);
  }
  async getSession(sessionId: number): Promise<ISessionEntity> {
    return await this.useCase.getSession(sessionId);
  }
  async deleteSession(sessionId: number): Promise<boolean> {
    return await this.useCase.deleteSession(sessionId);
  }
}

export default SessionPresenter;
