import { ISolutionDataEntity, ISolutionEntity } from "../../entities/interfaces/iSolution";

export default interface ISolutionRepository {
  createSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionEntity>;

  getSolutionList(problemId: number): Promise<ISolutionDataEntity[]>;
  getSolution(problemId: number): Promise<ISolutionEntity>;

  updateSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionEntity>;

  deleteSolution(solutionId: number): Promise<boolean>;
}
