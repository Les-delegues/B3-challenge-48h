import { GetterTree } from 'vuex';
import { RootState } from '@/store/root-state';
import { State } from './state';
import { AssociationInfos } from '../association-info.module';

export type Getters = {
  associationInfos(state: State): AssociationInfos;
}

export const getters: GetterTree<State, RootState> & Getters = {
  associationInfos: (state) => state,
};
