import { MutationTree } from 'vuex';
import { State } from './state';

export enum AssociationInfosMutationTypes {
  SET_ASSOCIATION_INFOS = 'SET_ASSOCIATION_INFOS',
}

export type Mutations<S = State> = {
  [AssociationInfosMutationTypes.SET_ASSOCIATION_INFOS](state: S, payload: State): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [AssociationInfosMutationTypes.SET_ASSOCIATION_INFOS](state, payload: State) {
    Object.assign(state, payload);
  },
};
