import { State as CalendarInfos } from './modules/calendarInfo/state';
import { State as AssociationInfos } from './modules/associationInfo/state';
import { State as Licenses } from './modules/license/state';

export type RootState = {
  calendarInfos: CalendarInfos;
  associationInfos: AssociationInfos;
  Licenses: Licenses;
};
