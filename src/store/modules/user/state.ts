import Role from '../role.h';

export interface User {
  id?: string;
  roles?: Role[];
  email?: string;
}

export type State = {
  user: User;
}

export const state: State = {
  user: {},
};
