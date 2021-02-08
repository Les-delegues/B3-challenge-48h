import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store';
import { State, Event } from './state';
import { CalendarInfoMutationTypes, Mutations } from './mutations';

export enum CalendarInfoActionTypes {
  ADD_EVENTS = 'ADD_EVENTS',
  SET_EVENTS = 'SET_EVENTS',
  DROP_EVENT = 'DROP_EVENT',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [CalendarInfoActionTypes.ADD_EVENTS](
    { commit }: AugmentedActionContext,
    event: Event[]
  ): void;
  [CalendarInfoActionTypes.SET_EVENTS](
    { commit }: AugmentedActionContext,
     events: Event[]
  ): void;
  [CalendarInfoActionTypes.DROP_EVENT](
    { commit }: AugmentedActionContext,
     id: string
  ): void;

}

export const actions: ActionTree<State, RootState> & Actions = {
  [CalendarInfoActionTypes.ADD_EVENTS]: ({ commit }, events: Event[]) => {
    commit(CalendarInfoMutationTypes.ADD_EVENTS, events);
  },
  [CalendarInfoActionTypes.SET_EVENTS]: ({ commit }, events: Event[]) => {
    commit(CalendarInfoMutationTypes.SET_EVENT, events);
  },
  [CalendarInfoActionTypes.DROP_EVENT]: ({ commit }, id: string) => {
    commit(CalendarInfoMutationTypes.DROP_EVENT, id);
  },
};
