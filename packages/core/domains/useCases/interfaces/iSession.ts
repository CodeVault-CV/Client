import { ISessionParams } from "../../dto/SessionDTO";
import { IProblemData } from "../../entities/interfaces/iProblem";
import ISessionEntity from "../../entities/interfaces/iSession";

export default interface ISessionUseCase {
  createSession(studyId: string, name: string, start: Date, end: Date): Promise<ISessionEntity>;
  updateSession(session: ISessionParams): Promise<ISessionEntity>;
  getSession(sessionId: number): Promise<ISessionEntity>;
  deleteSession(sessionId: number): Promise<boolean>;

  updateProblemList(
    sessionId: number,
    prev: Omit<IProblemData, "url">[],
    cur: Omit<IProblemData, "url">[]
  ): Promise<boolean>;
}
