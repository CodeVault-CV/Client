import axios from "axios";

const API = axios.create({
    baseURL: "http://choco-one.iptime.org:8090/api"
});

export const loginUser = (code: string) => API.get(`/user/login?code=${code}`);