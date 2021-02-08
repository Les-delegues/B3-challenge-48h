import { License } from '../license/state';
import Role from '../role.h';
import { User } from '../user/state';

export type State = {
  users: User[];
}

export const state: State = {
  users: [
    {
      id: '1',
      roles: [Role.President, Role.License],
      email: 'sebastien.boursier@ccba.com',
    },
    {
      id: '2',
      roles: [Role.Secretary, Role.License],
      email: 'marie.clement@ccba.com',
    },
    {
      id: '3',
      roles: [Role.Treasurer, Role.License],
      email: 'johnathan.segundus@ccba.com',
    },
    {
      id: '3',
      roles: [Role.License],
      email: 'olivier.verrier@ccba.com',
    },
  ],
};
