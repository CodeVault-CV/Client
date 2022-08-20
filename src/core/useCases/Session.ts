import { IProblemData } from "../entities/interfaces/iProblem";
import ISessionEntity from "../entities/interfaces/iSession";
import Problem from "../entities/Problem";
import Session, { ISessionData } from "../entities/Session";
import ISessionUseCase from "./interfaces/iSession";
import IProblemRepository from "./repository-interfaces/iProblem";
import ISessionRepository from "./repository-interfaces/iSession";
import ISolutionRepository from "./repository-interfaces/iSolution";

class SessionUseCase implements ISessionUseCase {
  constructor(
    private readonly sessionRepo: ISessionRepository,
    private readonly problemRepo: IProblemRepository,
    private readonly solutionRepo: ISolutionRepository
  ) {}

  async updateProblemList(
    sessionId: number,
    prev: Omit<IProblemData, "url">[],
    cur: Omit<IProblemData, "url">[]
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

    const problemEntities = await Promise.all(
      problemDTOList.map((problem) =>
        this.solutionRepo.getSolutionList(problem.id).then((solvedMembers) => {
          const problemEntity = new Problem(problem).pushSolvedMembers(solvedMembers);
          return problemEntity;
        })
      )
    );

    const sessionEntity = new Session(sessionDTO).pushProblems(problemEntities);
    return sessionEntity;
  }

  async getSession(sessionId: number): Promise<ISessionEntity> {
    const [sessionDTO, problemDTOList] = await Promise.all([
      this.sessionRepo.getSession(sessionId),
      this.problemRepo.getProblemList(sessionId),
    ]);

    const problemEntities = await Promise.all(
      problemDTOList.map((problem) =>
        this.solutionRepo.getSolutionList(problem.id).then((solvedMembers) => {
          const problemEntity = new Problem(problem).pushSolvedMembers(solvedMembers);
          return problemEntity;
        })
      )
    );

    const sessionEntity = new Session(sessionDTO).pushProblems(problemEntities);
    return sessionEntity;
  }

  async deleteSession(sessionId: number): Promise<boolean> {
    return await this.sessionRepo.deleteSession(sessionId);
  }
}

export default SessionUseCase;
