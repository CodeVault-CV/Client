import { get } from "../utils/http";

// GET
export const getToken = (code: string) => get(`/user/login?code=${code}`);
export const getSessionInfo = (sessionId: string | undefined) => get(`/session/${sessionId}`);
export const getProblemList = (sessionId: string | undefined) => get(`/problem/list?${sessionId}`);
export const getStudyList = () => get(`/study/list`);
