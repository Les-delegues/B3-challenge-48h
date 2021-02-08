import { MutationTree } from 'vuex';
import { AssociationInfos } from '../association-info.module';
import { State } from './state';

export enum AssociationInfosMutationTypes {
  SET_ASSOCIATION_INFOS = 'SET_ASSOCIATION_INFOS',
}

export type Mutations<S = State> = {
  [AssociationInfosMutationTypes.SET_ASSOCIATION_INFOS](state: S, payload: AssociationInfos): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [AssociationInfosMutationTypes.SET_ASSOCIATION_INFOS](state, payload: AssociationInfos) {
    Object.assign(state, payload);
  },
};
