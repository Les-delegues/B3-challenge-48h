import { MutationTree } from 'vuex';
import { User } from '../user/state';
import { State } from './state';

export enum UserMutationTypes {
  CREATE_USER = 'CREATE_USER',
  SET_USER = 'SET_USER',
}

export type Mutations<S = State> = {
  [UserMutationTypes.CREATE_USER](state: S, payload: User[]): void;
  [UserMutationTypes.SET_USER](state: S, payload: User[]): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [UserMutationTypes.CREATE_USER](state, payload: User[]) {
    Object.assign(state, payload);
  },
  [UserMutationTypes.SET_USER](state, payload: User[]) {
    Object.assign(state, payload);
  },
};
