import { UserCredentials, UserCredentialsRepository } from '@loopback/authentication-jwt';
import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory, juggler } from '@loopback/repository';
import { User, UserRelations } from '../models';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>;
    readonly userCredentials: HasOneRepositoryFactory<UserCredentials, typeof User.prototype.id>;
    constructor(dataSource: juggler.DataSource, userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>);
    findCredentials(userId: typeof User.prototype.id): Promise<UserCredentials | undefined>;
}
