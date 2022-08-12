import { deleteRequest, get, post, put } from "../utils/http";

// GET
export const getToken = (code: string) => get(`/user/login?code=${code}`);

export const getStudy = (studyId: string | undefined) => get(`/study/${studyId}`);
export const getStudyList = () => get(`/study/list`);

export const getSession = (sessionId: number) => get(`/session/${sessionId}`);
export const getSessionList = (studyId: string) => get(`/session/list/${studyId}`);

export const getProblemList = (sessionId: number) => get(`/problem/list/${sessionId}`);

export const getSolutionList = (problemId: number) => get(`/solution/list/${problemId}`);

// POST
export const createStudy = (studyName: string, repoName: string) =>
  post(`/study`, { studyName: studyName, repoName: repoName });

export const createSession = (studyId: string, name: string, start: Date, end: Date) =>
  post(`/session`, {
    studyId,
    name,
    start,
    end,
  });

export const createProblem = (sessionId: number, name: string, number: number, platform: string) =>
  post(`/problem`, {
    sessionId,
    name,
    number,
    platform,
  });

export const createSolution = (problemId: number, code: string, readMe: string, language: string) =>
  post(`/solution/create`, { problemId, code, readMe, language });

// PUT
export const updateSession = (session: { id: number; name: string; start: Date; end: Date }) =>
  put("/session", session);

export const updateStudy = (study: { id: string; name: string }) => put("/study", study);

// DELETE
export const deleteSession = (sessionId: number) => deleteRequest(`/session/${sessionId}`);

export const deleteStudy = (studyId: string) => deleteRequest(`/study/${studyId}`);

export const deleteProblem = (problemId: number) => deleteRequest(`/problem/${String(problemId)}`);
