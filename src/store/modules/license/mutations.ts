import { MutationTree } from 'vuex';
import { State, License } from './state';

export enum LicenseMutationTypes {
  ADD_LICENSES = 'ADD_LICENSES',
  SET_LICENSES = 'SET_LICENSES',
  DROP_LICENSE = 'DROP_LICENSE',
}

export type Mutations<S = State> = {
  [LicenseMutationTypes.ADD_LICENSES](state: S, payload: License[]): void;
  [LicenseMutationTypes.SET_LICENSES](state: S, payload: License[]): void;
  [LicenseMutationTypes.DROP_LICENSE](state: S, licenseNumber: number): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [LicenseMutationTypes.ADD_LICENSES](state, payload: License[]) {
    state.licenses.push(...payload);
  },
  [LicenseMutationTypes.SET_LICENSES](state, payload: License[]) {
    state.licenses = payload;
  },
  [LicenseMutationTypes.DROP_LICENSE](state, licenseNumber: number) {
    const index = state.licenses.findIndex((e) => e.licenseNumber === licenseNumber);
    if (index) {
      state.licenses.slice(index, 1);
    }
  },
};
