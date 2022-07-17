import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
});

const get = async (url: string, headers = {}) => {
  const response = await API.get(url, { headers });
  return response.data;
};

const post = async (url: string, body: any, headers = {}) => {
  const response = await API.post(url, body, { headers });
  return response.data;
};

export { get, post };
