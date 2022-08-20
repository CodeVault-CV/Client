import { ISessionParams } from "../../../core/dto/SessionDTO";
import { IProblemData } from "../../../core/entities/interfaces/iProblem";
import ISessionEntity from "../../../core/entities/interfaces/iSession";

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
