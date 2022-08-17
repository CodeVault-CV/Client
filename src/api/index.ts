import HTTP from "../data/infra/http";

export const getSolutionList = (problemId: number) => HTTP.get(`/solution/list/${problemId}`);

// POST
export const createSolution = (problemId: number, code: string, readMe: string, language: string) =>
  HTTP.post(`/solution`, { problemId, code, readMe, language });

