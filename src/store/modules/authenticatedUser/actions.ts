import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/root-state';
import { User, State } from './state';
import { AuthenticatedUserMutationTypes, Mutations } from './mutations';

export enum AuthenticatedUserActionTypes {
  SET_USER = 'SET_USER',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [AuthenticatedUserActionTypes.SET_USER](
    { commit }: AugmentedActionContext,
     events: User
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [AuthenticatedUserActionTypes.SET_USER]: ({ commit }, payload: User) => {
    commit(AuthenticatedUserMutationTypes.SET_USER, payload);
  },
};
