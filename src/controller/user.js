import Router from "../core/Router.js";
import * as API from "../api/index.js";

export const login = async (code) => {
    try {
        const {data} = await API.loginUser(code);
        if(data) localStorage.setItem("user", JSON.stringify({ ...data }));
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const logout = () => {
    localStorage.clear("user");
    new Router().render("/");
}

export const getUserProfile = async (name) => {
    try {
        const {data} = await API.getUserProfile(name);
        return data;
    } catch (error) {
        console.error(error);
    }
}