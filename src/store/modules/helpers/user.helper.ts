import { UserState, AuthResponse } from "../interfaces/user.interfaces";
import { Commit } from "vuex";
import { securedAxiosInstance } from "@/services/api.service";

export const defaultState: UserState = {
  userId: "",
  username: "",
  email: "",
  emailconfirmed: false,
  rememberMe: false,
  token: null
};

export const getDefaultState = (): UserState => {
  return Object.assign({}, defaultState);
};

export const getUserState = (): UserState => {
  const token = localStorage.getItem("token");
  let state: UserState = getDefaultState();
  if (token && token !== null) {
    securedAxiosInstance
      .get("users/me")
      .then(response => {
        state = response.data;
      })
      .catch(_e => {
        localStorage.removeItem("token");
      });
  }

  return state;
};

export const handleAuth = (commit: Commit, response: AuthResponse) => {
  const token = response.data.token;
  localStorage.setItem("token", token);
  commit("updateUser", response.data);
};
