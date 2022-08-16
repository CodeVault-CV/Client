import HTTP from "../data/infra/http";

// GET
export const getToken = (code: string) => HTTP.get(`/user/login?code=${code}`);

export const getProblemList = (sessionId: number) => HTTP.get(`/problem/list/${sessionId}`);

export const getSolutionList = (problemId: number) => HTTP.get(`/solution/list/${problemId}`);
// POST

export const createSession = (studyId: string, name: string, start: Date, end: Date) =>
  HTTP.post(`/session`, {
    studyId,
    name,
    start,
    end,
  });

export const createProblem = (sessionId: number, name: string, number: number, platform: string) =>
  HTTP.post(`/problem`, {
    sessionId,
    name,
    number,
    platform,
  });

export const createSolution = (problemId: number, code: string, readMe: string, language: string) =>
  HTTP.post(`/solution`, { problemId, code, readMe, language });

// DELETE

export const deleteProblem = (problemId: number) =>
  HTTP.deleteRequest(`/problem/${String(problemId)}`);
