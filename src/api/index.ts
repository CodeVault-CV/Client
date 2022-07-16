import { get } from "../utils/http";

// GET
export const getToken = (code: string) => get(`/user/login?code=${code}`);
export const getSessionInfo = (sessionId: string, token: string) => get(`/session/${sessionId}`, { Authorization: `Bearer ${token}` });
export const getStudyList = (token: string) => get(`/study/list`, { Authorization: `Bearer ${token}` })
