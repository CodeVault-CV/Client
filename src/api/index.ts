import { deleteRequest, get, post, put } from "../utils/http";

// GET
export const getToken = (code: string) => get(`/user/login?code=${code}`);

export const getStudy = (studyId: string | undefined) => get(`/study/${studyId}`);
export const getStudyList = () => get(`/study/list`);

export const getSession = (sessionId: number) => get(`/session/${sessionId}`);
export const getSessionList = (studyId: string) => get(`/session/list/${studyId}`);

export const getProblemList = (sessionId: number) => get(`/problem/list?${sessionId}`);

export const getSolutionList = (problemId: number) => get(`/solution/list/${problemId}`);

// POST
export const createStudy = (studyName: string, repoName: string) =>
  post(`/study`, { studyName: studyName, repoName: repoName });


// PUT
export const updateSession = (session: {
  id: number,
  name: string,
  start: Date,
  end: Date
}) => put("/session", session);

// DELETE
export const deleteSession = (sessionId: number) => deleteRequest(`/session/${sessionId}`);