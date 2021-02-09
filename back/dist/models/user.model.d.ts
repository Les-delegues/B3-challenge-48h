import { UserCredentials } from '@loopback/authentication-jwt';
import { Entity } from '@loopback/repository';
import { Role } from './user.model.h';
export declare class User extends Entity {
    id: string;
    realm?: string;
    username?: string;
    email: string;
    emailVerified?: boolean;
    verificationToken?: string;
    roles?: Role[];
    userCredentials: UserCredentials;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
