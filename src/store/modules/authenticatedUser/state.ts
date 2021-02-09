import Role from '../role.h';

export interface User {
  id: string;
  roles: Role[];
  email: string;
  token: string | null;
}

export type State = {
  user: User | null;
}

export const state: State = {
  user: null,
};
