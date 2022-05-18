import { get, post } from "../utils/http.js";
import { logout } from "../controller/user.js";

const baseURL = "http://choco-one.iptime.org:8090/api";
const makeHeader = (params) => { 
    const header = { ...params };
    if(localStorage.getItem("user")) {
        header.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
    }
    return header;
};

const checkAuth = async (params, callback) => {
    const response = await callback(...params);
    if(response.status === 401) {
        logout();
    }
    return response;
}

// 유저 API
export const loginUser = async (code) => await get(baseURL + `/user/login?code=${code}`);
export const getUserProfile = async (name) => await get(baseURL + `/user/profile?name=${name}`, makeHeader());

// 스터디 API
export const getStudyList = async () => await get(baseURL + `/study/list`, makeHeader());
export const getStudyInfo = async (studyId) => await get(baseURL + `/study/${studyId}`, makeHeader());
export const createStudy = async (data) => await post(baseURL + `/study`, data, makeHeader());
export const addMember = async (data) => await post (baseURL + "/study/member", data, makeHeader());