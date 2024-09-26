import axios from "axios";

const BASE_URL = process.env.REACT_APP_CALLBACK_URL;
const accessToken = localStorage.getItem("access_token");

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${accessToken}` },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
