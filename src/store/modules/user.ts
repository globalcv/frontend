import {
  UserState,
  LoginCredentials,
  RegisterCredentials
} from "../interfaces/user.interfaces";
import {
  getDefaultState,
  handleAuth,
  getUserState
} from "../helpers/user.helper";
import { Commit } from "vuex";
import {
  plainAxiosInstance,
  securedAxiosInstance
} from "@/services/api.service";

const state: UserState = getUserState();

const mutations = {
  updateUser(state: UserState, user: UserState) {
    state.userId = user.userId;
    state.username = user.username;
    state.email = user.email;
    state.token = user.token;
  },

  resetUser(state: UserState) {
    const defaultState = getDefaultState();
    state.userId = defaultState.userId;
    state.username = defaultState.username;
    state.email = defaultState.email;
  }
};

const actions = {
  login({ commit }: { commit: Commit }, credentials: LoginCredentials) {
    return new Promise((_resolve, reject) => {
      plainAxiosInstance
        .post("/users/login", {
          ...credentials
        })
        .then(response => {
          handleAuth(commit, response);
        })
        .catch(e => reject(e));
    });
  },

  register({ commit }: { commit: Commit }, credentials: RegisterCredentials) {
    return new Promise((_resolve, reject) => {
      plainAxiosInstance
        .post("users/register", {
          ...credentials
        })
        .then(response => {
          handleAuth(commit, response);
        })
        .catch(e => reject(e));
    });
  },

  logout({ commit }: { commit: Commit }) {
    securedAxiosInstance.post("/logout"); // todo: handle errors
    localStorage.removeItem("token");
    commit("resetUser");
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
