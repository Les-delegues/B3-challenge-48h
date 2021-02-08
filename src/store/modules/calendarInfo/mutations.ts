import { MutationTree } from 'vuex';
import { State, Event } from './state';

export enum CalendarInfoMutationTypes {
  ADD_EVENTS = 'ADD_EVENTS',
  SET_EVENT = 'SET_EVENT',
  DROP_EVENT = 'DROP_EVENT'
}

export type Mutations<S = State> = {
  [CalendarInfoMutationTypes.ADD_EVENTS](state: S, payload: Event[]): void;
  [CalendarInfoMutationTypes.SET_EVENT](state: S, payload: Event[]): void;
  [CalendarInfoMutationTypes.DROP_EVENT](state: S, id: string): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [CalendarInfoMutationTypes.ADD_EVENTS](state, payload: Event[]) {
    state.events.push(...payload);
  },
  [CalendarInfoMutationTypes.SET_EVENT](state, payload: Event[]) {
    state.events = payload;
  },
  [CalendarInfoMutationTypes.DROP_EVENT](state, id: string) {
    const index = state.events.findIndex((e) => e.id === id);
    if (index) {
      state.events.slice(index, 1);
    }
  },
};
