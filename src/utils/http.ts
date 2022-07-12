import axios from "axios";

const API = axios.create({
    baseURL: "http://choco-one.iptime.org:8090/api"
});


const get = async (url: string, headers = {}) => {
    const response = await API.get(url, { headers });
    return response.data;
}

const post = async (url: string, body: any, headers = {}) => {
    const response = await API.post(url, body, { headers });
    return response.data;
}

export {
    get,
    post
};