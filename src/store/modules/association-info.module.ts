import {
  ActionTree, GetterTree, Module, MutationTree,
} from 'vuex';

export interface AssociationInfos {
  title: string;
  acronym: string;
  object: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: number;
  city: string;
  country: string;
  creationDate: Date;

}

const associationState: AssociationInfos = {
  title: '',
  acronym: '',
  object: '',
  addressLine1: '',
  addressLine2: '',
  postalCode: 0,
  city: '',
  country: '',
  creationDate: new Date(),
};

const getters: GetterTree<AssociationInfos, AssociationInfos> = {

};

const mutations: MutationTree<AssociationInfos> = {
  setAssociationInfos: (state, association: AssociationInfos) => {
    state.title = association.title;
    state.acronym = association.acronym;
    state.object = association.object;
    state.addressLine1 = association.addressLine1;
    state.addressLine2 = association.addressLine2;
    state.postalCode = association.postalCode;
    state.city = association.city;
    state.country = association.country;
    state.creationDate = association.creationDate;
  },
};

const actions: ActionTree<AssociationInfos, AssociationInfos> = {
  setAssociationInfos: ({ commit }, association: AssociationInfos) => {
    commit('setAssociationInfos', association);
  },
};

export const moduleAssociationInfoModule: Module<AssociationInfos, AssociationInfos> = {
  state: associationState,
  mutations,
  actions,
  getters,
};
