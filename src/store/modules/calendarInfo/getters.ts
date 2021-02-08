import { RootState } from '@/store/root-state';
import { GetterTree } from 'vuex';
import { State, Event } from './state';

export type Getters = {
  events(state: State): Event[];
  eventById(state: State): (id: string) => Event | undefined;
  eventOfDay(state: State): (day: number, month: number, year: number) => Event[];
}

export const getters: GetterTree<State, RootState> & Getters = {
  events: (state) => state.events,
  eventById: (state) => (id: string) => state.events.find((event) => event.id === id),
  eventOfDay: (state) => (day: number, month: number, year: number) => state.events.filter((event) => Object.values(event.eventDate.day).includes(day)
      && Object.values(event.eventDate.month).includes(month)
      && Object.values(event.eventDate.year).includes(year)),
};
