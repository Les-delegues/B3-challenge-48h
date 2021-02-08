import {
  ActionTree, GetterTree, Module, MutationTree,
} from 'vuex';

export interface CalendarInfos {
  events: Event[];
}

export interface Event {
  id: string;
  eventDate: EventInterval;
  tooltip: string;
  description: string;
  link: string;
}

export interface EventInterval {
  day: Interval;
  month: Interval;
  year: Interval;
}

export interface Interval {
  start: number;
  end: number;
}

const calendarState: CalendarInfos = {
  events: [],
};

const getters: GetterTree<CalendarInfos, CalendarInfos> = {
  events: (state) => state.events,
  eventById: (state) => (id: string) => state.events.find((event) => event.id === id),
  eventOfDay: (state) => (day: number, month: number, year: number) => {
    state.events.filter((event) => Object.values(event.eventDate.day).includes(day)
      && Object.values(event.eventDate.month).includes(month)
      && Object.values(event.eventDate.year).includes(year));
  },
};

const actions: ActionTree<CalendarInfos, CalendarInfos> = {
  addEvent: ({ commit }, event: Event) => {
    commit('addEvent', event);
  },
  setEvents: ({ commit }, events: Event[]) => {
    commit('setEvents', events);
  },
  dropEvent: ({ commit }, id: string) => {
    commit('dropEvent', id);
  },
};

const mutations: MutationTree<CalendarInfos> = {
  addEvent: (state, event: Event) => {
    state.events.push(event);
  },
  setEvents: (state, events: Event[]) => {
    state.events = events;
  },
  dropEvent: (state, id: string) => {
    const index = state.events.findIndex((e) => e.id === id);
    if (index) {
      state.events.slice(index, 1);
    }
  },
};

export const calendarInfoModule: Module<CalendarInfos, CalendarInfos> = {
  state: calendarState,
  getters,
  actions,
  mutations,
};
