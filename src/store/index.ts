import { createStore } from 'vuex';
import calendarInfos from './modules/calendarInfo';
import associationInfos from './modules/associationInfos';
import user from './modules/user';
import authenticatedUser from './modules/authenticatedUser';
import license from './modules/license';

export default createStore({
  modules: {
    calendarInfos,
    associationInfos,
    user,
    license,
    authenticatedUser,
  },
});
