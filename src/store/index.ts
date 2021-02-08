import { Store } from 'vuex';
import calendarInfos from './modules/calendarInfo';
import associationInfos from './modules/associationInfo';
import user from './modules/user';
import licenses from './modules/license';

export default new Store({
  modules: {
    calendarInfos,
    associationInfos,
    user,
    licenses,
  },
});
