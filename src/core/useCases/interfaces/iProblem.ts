import Problem from "../../types/Problem";

export default interface IProblemUseCase {
  getProblemList(sessionId: number): Promise<Problem[]>;
  createProblem(sessionId: number, name: string, number: number, platform: string): Promise<Problem>;
  deleteProblem(problemId: number): Promise<boolean>;
}