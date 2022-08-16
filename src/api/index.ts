import HTTP from "../data/infra/http";

// GET
export const getToken = (code: string) => HTTP.get(`/user/login?code=${code}`);

export const getSession = (sessionId: number) => HTTP.get(`/session/${sessionId}`);
export const getSessionList = (studyId: string) => HTTP.get(`/session/list/${studyId}`);

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

// PUT
export const updateSession = (session: { id: number; name: string; start: Date; end: Date }) =>
  HTTP.put("/session", session);

// DELETE
export const deleteSession = (sessionId: number) => HTTP.deleteRequest(`/session/${sessionId}`);

export const deleteProblem = (problemId: number) =>
  HTTP.deleteRequest(`/problem/${String(problemId)}`);
