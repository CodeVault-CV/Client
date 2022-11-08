import { ISessionParams } from "../../../domains/dto/SessionDTO";
import { IProblemData } from "../../../domains/entities/interfaces/iProblem";
import ISessionEntity from "../../../domains/entities/interfaces/iSession";

export default interface ISessionPresenter {
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
