/// <reference types="express" />
import { TokenService } from '@loopback/authentication';
import { Credentials, MyUserService } from '@loopback/authentication-jwt';
import { Response, SchemaObject } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { User } from '../models';
import { UserRepository } from '../repositories/user.repository';
export declare class NewUserRequest extends User {
    password: string;
}
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: SchemaObject;
        };
    };
};
export declare class UserController {
    protected jwtService: TokenService;
    protected userService: MyUserService;
    protected user: UserProfile;
    res: Response;
    protected readonly userRepository: UserRepository;
    constructor(jwtService: TokenService, userService: MyUserService, user: UserProfile, res: Response, userRepository: UserRepository);
    login(credentials: Credentials): Promise<User>;
    whoAmI(currentUserProfile: UserProfile): Promise<string>;
    signUp(newUserRequest: NewUserRequest): Promise<User>;
}
