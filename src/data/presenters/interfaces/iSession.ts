import { ISessionParams } from "../../../core/dto/SessionDTO";
import IProblemEntity from "../../../core/entities/interfaces/iProblem";
import ISessionEntity from "../../../core/entities/interfaces/iSession";

export default interface ISessionPresenter {
  createSession(studyId: string, name: string, start: Date, end: Date): Promise<ISessionEntity>;
  updateSession(session: ISessionParams): Promise<ISessionEntity>;
  getSession(sessionId: number): Promise<ISessionEntity>;
  deleteSession(sessionId: number): Promise<boolean>;

  getProblemList(sessionId: number): Promise<IProblemEntity[]>;
  updateProblemList(sessionId: number, prev: IProblemEntity[], cur: IProblemEntity[]): Promise<boolean>;
}