import IProblemEntity from "../entities/interfaces/iProblem";
import ISessionEntity from "../entities/interfaces/iSession";
import Session, { ISessionData } from "../entities/Session";
import ISessionUseCase from "./interfaces/iSession";
import IProblemRepository from "./repository-interfaces/iProblem";
import ISessionRepository from "./repository-interfaces/iSession";

class SessionUseCase implements ISessionUseCase {
  constructor(
    private readonly sessionRepo: ISessionRepository,
    private readonly problemRepo: IProblemRepository
  ) {}

  async getProblemList(sessionId: number): Promise<IProblemEntity[]> {
    return await this.problemRepo.getProblemList(sessionId);
  }
  async updateProblemList(
    sessionId: number,
    prev: IProblemEntity[],
    cur: IProblemEntity[]
  ): Promise<boolean> {
    const newProblems = cur.filter((problem) => problem.id < 0);

    const validId = new Set(cur.map(({ id }) => id));
    const deletedProblems = prev.filter((problem) => !validId.has(problem.id));

    return await Promise.all([
      ...newProblems.map(({ name, platform, number }) =>
        this.problemRepo.createProblem(sessionId, name, +number, platform)
      ),
      ...deletedProblems.map(({ id }) => this.problemRepo.deleteProblem(id)),
    ]).then(() => true);
  }

  async createSession(
    studyId: string,
    name: string,
    start: Date,
    end: Date
  ): Promise<ISessionEntity> {
    const sessionDTO = await this.sessionRepo.createSession(studyId, name, start, end);
    return new Session(sessionDTO);
  }
  
  async updateSession(session: ISessionData): Promise<ISessionEntity> {
    const [sessionDTO, problemDTOList] = await Promise.all([
      this.sessionRepo.updateSession(session),
      this.problemRepo.getProblemList(session.id),
    ]);

    const sessionEntity = new Session(sessionDTO).pushProblems(problemDTOList);
    return sessionEntity;
  }

  async getSession(sessionId: number): Promise<ISessionEntity> {
    const [sessionDTO, problemDTOList] = await Promise.all([
      this.sessionRepo.getSession(sessionId),
      this.problemRepo.getProblemList(sessionId),
    ]);

    const sessionEntity = new Session(sessionDTO).pushProblems(problemDTOList);
    return sessionEntity;
  }

  async deleteSession(sessionId: number): Promise<boolean> {
    return await this.sessionRepo.deleteSession(sessionId);
  }
}

export default SessionUseCase;
