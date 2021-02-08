import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/root-state';
import { State } from './state';
import { UserMutationTypes, Mutations } from './mutations';
import { User } from '../user/state';

export enum UsersActionTypes {
  CREATE_USERS = 'CREATE_USERS',
  SET_USERS = 'SET_USERS',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [UsersActionTypes.CREATE_USERS](
    { commit }: AugmentedActionContext,
    event: User[]
  ): void;
  [UsersActionTypes.SET_USERS](
    { commit }: AugmentedActionContext,
     events: User[]
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [UsersActionTypes.CREATE_USERS]: ({ commit }, payload: User[]) => {
    commit(UserMutationTypes.CREATE_USER, payload);
  },
  [UsersActionTypes.SET_USERS]: ({ commit }, payload: User[]) => {
    commit(UserMutationTypes.SET_USER, payload);
  },
};
