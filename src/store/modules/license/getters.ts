import { RootState } from '@/store/root-state';
import { GetterTree } from 'vuex';
import { License } from '../license.module';
import { State } from './state';

export type Getters = {
  licenses(state: State): License[];
  licenseByNumber(state: State): (licenseNumber: number) => License | undefined;
  licenseToBeRenewed(state: State): () => License[];
}

export const getters: GetterTree<State, RootState> & Getters = {
  licenses: (state) => state.licenses,
  licenseByNumber: (state) => (licenseNumber: number) => state.licenses.find(
    (license) => license.licenseNumber === licenseNumber,
  ),
  licenseToBeRenewed: (state) => () => state.licenses.filter((license) => {
    const now = new Date();
    return license.endDate < now;
  }),
};
