import { get } from "../utils/http";

// GET
export const getToken = (code: string) => get(`/user/login?code=${code}`);

export const getStudy = (studyId: string | undefined) => get(`/study/${studyId}`);
export const getStudyList = () => get(`/study/list`);

export const getSession = (sessionId: string | undefined) => get(`/session/${sessionId}`);

export const getProblemList = (sessionId: string | undefined) => get(`/problem/list?${sessionId}`);

export const getSolutionList = (problemId: number) => get(`/solution/list/${problemId}`);
