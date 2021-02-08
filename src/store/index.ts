import { Store } from 'vuex';

import { state as CalendarState } from './modules/calendarInfo/state';
import calendarInfos from './modules/calendarInfo';

export type RootState = {
  calendarInfos: typeof CalendarState;
};

export default new Store({
  modules: {
    calendarInfos,
  },
});
