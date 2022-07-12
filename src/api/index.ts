import { get } from "../utils/http";

export const getToken = (code: string) => get(`/user/login?code=${code}`);