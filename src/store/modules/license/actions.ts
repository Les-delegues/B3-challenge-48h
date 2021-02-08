import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/root-state';
import { User } from '@/store/modules/authenticatedUser/state';
import { State } from './state';
import { Mutations } from './mutations';

export enum LicenseActionTypes {
  FIND_FOR_USER = 'FIND_FOR_USER',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [LicenseActionTypes.FIND_FOR_USER](
    { commit }: AugmentedActionContext,
    userId: User['id']
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [LicenseActionTypes.FIND_FOR_USER]: ({ state }, userId: User['id']) => (
    state.licenses.sort((a, b) => b.startDate.getTime() - a.startDate.getTime()).find((license) => license.userId === userId)
  ),
};
