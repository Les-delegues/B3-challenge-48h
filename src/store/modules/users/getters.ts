import { RootState } from '@/store/root-state';
import { GetterTree } from 'vuex';
import { User } from '../user/state';
import { State } from './state';

export type Getters = {
  user(state: State): User[];
}

export const getters: GetterTree<State, RootState> & Getters = {
  user: (state) => state.users,
};