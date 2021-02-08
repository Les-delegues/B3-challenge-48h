import {
  ActionTree, GetterTree, Module, MutationTree,
} from 'vuex';
import Role from './role.h';

export interface User {
  id?: string;
  role?: Role;
  firstName?: string;
  lastName?: string;
  birthdate?: Date;
  addressLine1?: string;
  addressLine2?: string;
  postalCode?: string;
  city?: string;
  country?: string;
  email?: string;
  phoneNumber?: string;
}

const UserState: User = {};

const getters: GetterTree<User, User> = {
  user: (state) => state,
};

const actions: ActionTree<User, User> = {
  createUser: ({ commit }, user: User) => {
    commit('createUser', user);
  },
  updateUser: ({ commit }, user: User) => {
    commit('setEvents', user);
  },
  deleteUser: ({ commit }) => {
    commit('deleteUser');
  },
};

const mutations: MutationTree<User> = {
  createUser: (state, user: User) => {
    Object.assign(state, user);
  },
  setUser: (state, user: User) => {
    Object.assign(state, user);
  },
  deleteUser: (state) => {
    Object.assign(state, {});
  },
};

export const userModule = {
  state: UserState,
  getters,
  actions,
  mutations,
};
