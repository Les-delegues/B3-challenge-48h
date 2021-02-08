import { GetterTree } from 'vuex';
import { RootState } from '@/store/root-state';
import { State } from './state';

export type Getters = {
  associationInfos(state: State): State;
}

export const getters: GetterTree<State, RootState> & Getters = {
  associationInfos: (state) => state,
};
