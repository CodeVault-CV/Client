import { IProblemDTO } from '../../dto/ProblemDTO';

export default interface IProblemRepository {
  getProblemList(sessionId: number): Promise<IProblemDTO[]>;
  createProblem(sessionId: number, name: string, number: number, platform: string): Promise<IProblemDTO>;
  deleteProblem(problemId: number): Promise<boolean>;
}
