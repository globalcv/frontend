import { UserState, AuthResponse } from "../interfaces/user.interfaces";
import { Commit } from "vuex";

export const defaultState: UserState = {
  userId: "",
  username: "",
  email: "",
  emailconfirmed: false,
  rememberMe: false,
  token: localStorage.getItem("token")
};

export const getDefaultState = (): UserState => {
  return Object.assign({}, defaultState);
};

export const handleAuth = (commit: Commit, response: AuthResponse) => {
  const token = response.data.token;
  localStorage.setItem("token", token);
  commit("updateUser", response.data);
};
