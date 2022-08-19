import axios, { AxiosRequestConfig } from "axios";
import Auth from "../../di/Auth";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
});

API.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config?.headers) {
    throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
  }

  const token = Auth.getToken();
  if (token !== null) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  const studyId = new URL(window.location.href).pathname.split("/")[2];
  if (studyId) {
    config.headers["Study"] = studyId;
  }

  return config;
});

const get = async (url: string, headers = {}) => {
  const response = await API.get(url, { headers });
  return response.data;
};

const post = async (url: string, body: any, headers = {}) => {
  const response = await API.post(url, body, { headers });
  return response.data;
};

const put = async (url: string, body: any, headers = {}) => {
  const response = await API.put(url, body, { headers });
  return response.data;
};

const deleteRequest = async (url: string, headers = {}) => {
  const response = await API.delete(url, { headers });
  return response.data;
};

const HTTP = {
  get,
  post,
  put,
  deleteRequest,
};

export default HTTP;
