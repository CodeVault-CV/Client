import Problem from "../../../core/types/Problem";

export default interface iProblemPresenter {
  getProblemList(sessionId: number): Promise<Problem[]>;
  createProblem(sessionId: number, name: string, number: number, platform: string): Promise<Problem>;
  deleteProblem(problemId: number): Promise<boolean>;
}