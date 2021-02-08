import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/root-state';
import { License, State } from './state';
import { LicenseMutationTypes, Mutations } from './mutations';

export enum LicenseActionTypes {
  ADD_LICENSES = 'ADD_LICENSES',
  SET_LICENSES = 'SET_LICENSES',
  DROP_LICENSE = 'DROP_LICENSE',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [LicenseActionTypes.ADD_LICENSES](
    { commit }: AugmentedActionContext,
    event: License[]
  ): void;
  [LicenseActionTypes.SET_LICENSES](
    { commit }: AugmentedActionContext,
     events: License[]
  ): void;
  [LicenseActionTypes.DROP_LICENSE](
    { commit }: AugmentedActionContext,
     licenseNumber: number
  ): void;

}

export const actions: ActionTree<State, RootState> & Actions = {
  [LicenseActionTypes.ADD_LICENSES]: ({ commit }, payload: License[]) => {
    commit(LicenseMutationTypes.ADD_LICENSES, payload);
  },
  [LicenseActionTypes.SET_LICENSES]: ({ commit }, payload: License[]) => {
    commit(LicenseMutationTypes.SET_LICENSES, payload);
  },
  [LicenseActionTypes.DROP_LICENSE]: ({ commit }, licenseNumber: number) => {
    commit(LicenseMutationTypes.DROP_LICENSE, licenseNumber);
  },
};
