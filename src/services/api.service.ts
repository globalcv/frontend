import axios from "axios";

const API_URL = "http://localhost:8000";

export const plainAxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const securedAxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token")
  }
});

securedAxiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (401 === error.response.status) {
      // todo: clear user state
      localStorage.setItem("token", "");
      localStorage.setItem("username", "");
    } else {
      return Promise.reject(error);
    }
  }
);
