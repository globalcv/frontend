import { UserState } from "./interfaces/user.interfaces";

const defaultState: UserState = {
  userId: "",
  username: "",
  email: "",
  emailconfirmed: false,
  rememberMe: false
};

const getDefaultState = (): UserState => {
  return Object.assign({}, defaultState);
};

const state: UserState = getDefaultState();

const mutations = {
  updateUser(state: UserState, user: UserState) {
    state.userId = user.userId;
    state.username = user.username;
    state.email = user.email;
    state.emailconfirmed = user.emailconfirmed;
    state.rememberMe = user.rememberMe;
  },

  logoutUser(state: UserState) {
    state = getDefaultState();
  }
};

const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
