import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/root-state';
import { State } from './state';
import { AssociationInfosMutationTypes, Mutations } from './mutations';

export enum AssociationInfosActionTypes {
  SET_ASSOCIATION_INFOS = 'SET_ASSOCIATION_INFOS',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>;

export interface Actions {
  [AssociationInfosActionTypes.SET_ASSOCIATION_INFOS](
    { commit }: AugmentedActionContext,
    event: State
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [AssociationInfosActionTypes.SET_ASSOCIATION_INFOS]: ({ commit }, payload: State) => {
    commit(AssociationInfosMutationTypes.SET_ASSOCIATION_INFOS, payload);
  },
};
