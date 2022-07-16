import { get } from "../utils/http";

// GET
export const getToken = (code: string) => get(`/user/login?code=${code}`);
export const getSessionInfo = (sessionId: string) => get(`/session/${sessionId}`);
export const getStudyList = (token: string) => get(`/study/list`, { Authorization: `Bearer ${token}` })
