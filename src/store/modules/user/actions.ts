import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/root-state';
import { User, State } from './state';
import { UserMutationTypes, Mutations } from './mutations';

export enum UserActionTypes {
  CREATE_USER = 'CREATE_USER',
  SET_USER = 'SET_USER',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [UserActionTypes.CREATE_USER](
    { commit }: AugmentedActionContext,
    event: User
  ): void;
  [UserActionTypes.SET_USER](
    { commit }: AugmentedActionContext,
     events: User
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [UserActionTypes.CREATE_USER]: ({ commit }, payload: User) => {
    commit(UserMutationTypes.CREATE_USER, payload);
  },
  [UserActionTypes.SET_USER]: ({ commit }, payload: User) => {
    commit(UserMutationTypes.SET_USER, payload);
  },
};
