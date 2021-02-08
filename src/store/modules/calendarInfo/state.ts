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

export type State = {
  events: Event[];
}

export const state: State = {
  events: [],
};
