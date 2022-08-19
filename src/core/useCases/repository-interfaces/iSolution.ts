import { ISolutionDTO } from "../../dto/SolutionDTO";
import { ISolvedDTO } from "../../dto/SolvedDTO";

export default interface ISolutionRepository {
  createSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionDTO>;

  getSolutionList(problemId: number): Promise<ISolvedDTO[]>;
  getSolution(problemId: number): Promise<ISolutionDTO>;

  updateSolution(
    problemId: number,
    code: string,
    readMe: string,
    language: string
  ): Promise<ISolutionDTO>;

  deleteSolution(solutionId: number): Promise<boolean>;
}
