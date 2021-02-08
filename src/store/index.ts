import { createStore } from 'vuex';
import { calendarInfoModule } from './modules';

export default createStore({
  modules: {
    calendarInfoModule,
  },
});
