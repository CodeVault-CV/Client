import { get } from "../utils/http";

export const getToken = (code: string) => get(`/user/login?code=${code}`);

export const getStudyList = (token: string) => get(`/study/list`, { Authorization: `Bearer ${token}` })
