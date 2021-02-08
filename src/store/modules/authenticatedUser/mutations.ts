import { MutationTree } from 'vuex';
import { State, User } from './state';

export enum AuthenticatedUserMutationTypes {
  SET_USER = 'SET_USER',
}

export type Mutations<S = State> = {
  [AuthenticatedUserMutationTypes.SET_USER](state: S, payload: User): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [AuthenticatedUserMutationTypes.SET_USER](state, payload: User) {
    Object.assign(state, payload);
  },
};
