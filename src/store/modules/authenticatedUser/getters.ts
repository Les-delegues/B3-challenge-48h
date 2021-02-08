import { RootState } from '@/store/root-state';
import { GetterTree } from 'vuex';
import { State, User } from './state';

export type Getters = {
  user(state: State): User | null;
}

export const getters: GetterTree<State, RootState> & Getters = {
  user: (state) => state.user,
};
