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
    state.name = payload.name;
    state.acronym = payload.acronym;
    state.object = payload.object;
    state.addressLine1 = payload.addressLine1;
    state.addressLine2 = payload.addressLine2;
    state.zipCode = payload.zipCode;
    state.city = payload.city;
    state.country = payload.country;
    state.creationDate = payload.creationDate;
  },
};
