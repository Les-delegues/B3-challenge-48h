import { RootState } from '@/store/root-state';
import { GetterTree } from 'vuex';
import Role from '@/store/modules/role.h';
import { User } from '../authenticatedUser/state';
import { State } from './state';

export type Getters = {
  users(state: State): User[];
  licensedUsers(state: State): User[];
}

export const getters: GetterTree<State, RootState> & Getters = {
  users: (state) => state.users,
  licensedUsers: (state) => state.users.filter((user) => user.roles.includes(Role.Licensed)),
};
