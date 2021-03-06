import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/root-state';
import { State } from './state';
import { UserMutationTypes, Mutations } from './mutations';
import { User } from '../authenticatedUser/state';

export enum UsersActionTypes {
  CREATE_USER = 'CREATE_USER',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [UsersActionTypes.CREATE_USER](
    { commit }: AugmentedActionContext,
    payload: User
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [UsersActionTypes.CREATE_USER]: ({ commit }, payload: User) => {
    commit(UserMutationTypes.CREATE_USER, payload);
  },
};
