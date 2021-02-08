import {
  ActionTree, GetterTree, Module, MutationTree,
} from 'vuex';

export interface License {
  licenseNumber: number;
  startDate: Date;
  endDate: Date;
}

const licenseState: { licenses: License[] } = {
  licenses: [],
};

const getters: GetterTree<{ licenses: License[] }, { licenses: License[] }> = {
  licenses: (state) => state.licenses,
  licenseByNumber: (state) => (licenseNumber: number) => state.licenses.find(
    (license) => license.licenseNumber === licenseNumber,
  ),
  licenseToBeRenewed: (state) => () => {
    state.licenses.filter((license) => {
      const now = new Date();
      return license.endDate < now;
    });
  },
};

const actions: ActionTree<{ licenses: License[] }, { licenses: License[] }> = {
  addLicense: ({ commit }, license: License) => {
    commit('addLicense', license);
  },
  setLicenses: ({ commit }, licenses: License[]) => {
    commit('setLicenses', licenses);
  },
  dropLicense: ({ commit }, licenseNumber: number) => {
    commit('dropEvent', licenseNumber);
  },
};

const mutations: MutationTree<{ licenses: License[] }> = {
  addLicense: (state, license: License) => {
    state.licenses.push(license);
  },
  setLicenses: (state, licenses: License[]) => {
    state.licenses = licenses;
  },
  dropLicense: (state, licenseNumber: number) => {
    const index = state.licenses.findIndex((e) => e.licenseNumber === licenseNumber);
    if (index) {
      state.licenses.slice(index, 1);
    }
  },
};

export const licenseModule: Module<{ licenses: License[] }, { licenses: License[] }> = {
  state: licenseState,
  getters,
  actions,
  mutations,
};
