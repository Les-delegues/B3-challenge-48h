import Role from '../role.h';
import { User } from '../authenticatedUser/state';

export type State = {
  users: User[];
}

export const state: State = {
  users: [
    {
      id: '1',
      roles: [Role.President, Role.Licensed],
      email: 'sebastien.boursier@ccba.com',
    },
    {
      id: '2',
      roles: [Role.Secretary, Role.Licensed],
      email: 'marie.clement@ccba.com',
    },
    {
      id: '3',
      roles: [Role.Treasurer, Role.Licensed],
      email: 'johnathan.segundus@ccba.com',
    },
    {
      id: '4',
      roles: [Role.Licensed],
      email: 'olivier.verrier@ccba.com',
    },
  ],
};
