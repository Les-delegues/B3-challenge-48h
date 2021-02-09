import { UserService as IUserService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
import { User } from '../models';
import { UserRepository } from '../repositories/user.repository';
export declare type Credentials = {
    email: string;
    password: string;
};
export declare class UserService implements IUserService<User, Credentials> {
    protected readonly userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    verifyCredentials(credentials: Credentials): Promise<User>;
    convertToUserProfile(user: User): UserProfile;
}
