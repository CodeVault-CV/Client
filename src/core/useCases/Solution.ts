import ISolutionUseCase from "./interfaces/iSolution";
import ISolutionRepository from "./repository-interfaces/iSolution";

export default class SolutionUseCase implements ISolutionUseCase {
  constructor(private readonly solutionRepo: ISolutionRepository) {}

  async createSolution(problemId: number, code: string, readMe: string, language: string) {
    return await this.solutionRepo.createSolution(problemId, code, readMe, language);
  }

  async getSolutionList(problemId: number) {
    return await this.solutionRepo.getSolutionList(problemId);
  }
  async getSolution(problemId: number) {
    return await this.solutionRepo.getSolution(problemId);
  }

  async updateSolution(problemId: number, code: string, readMe: string, language: string) {
    return await this.solutionRepo.updateSolution(problemId, code, readMe, language);
  }

  async deleteSolution(solutionId: number): Promise<boolean> {
    return await this.solutionRepo.deleteSolution(solutionId);
  }
}
