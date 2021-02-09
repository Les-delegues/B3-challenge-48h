import { Client } from '@loopback/testlab';
import { HelloPlatformApplication } from '../..';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: HelloPlatformApplication;
    client: Client;
}
