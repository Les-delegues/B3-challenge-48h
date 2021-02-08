import { MutationTree } from 'vuex';
import { User } from '../authenticatedUser/state';
import { State } from './state';

export enum UserMutationTypes {
  CREATE_USER = 'CREATE_USER',
}

export type Mutations<S = State> = {
  [UserMutationTypes.CREATE_USER](state: S, payload: User): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [UserMutationTypes.CREATE_USER](state, payload) {
    state.users.push({ ...payload });
  },
};
