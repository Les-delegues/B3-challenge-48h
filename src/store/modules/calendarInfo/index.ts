import { RootState } from '@/store';
import { Module } from 'vuex';
import { State, state } from './state';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const store: Module<State, RootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default store;
