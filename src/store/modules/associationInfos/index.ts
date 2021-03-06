import { Module } from 'vuex';
import { RootState } from '@/store/root-state';
import { State, state } from './state';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const store: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default store;
