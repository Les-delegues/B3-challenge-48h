import {
  Client,
  createRestAppClient,
  givenHttpServerConfig,
} from '@loopback/testlab';
import { HelloPlatformApplication } from '../..';

export async function setupApplication(): Promise<AppWithClient> {
  const app = new HelloPlatformApplication({
    rest: givenHttpServerConfig(),
  });

  await app.boot();

  /**
   * Override default config for DataSource for testing so we don't write
   * test data to file when using the memory connector.
   */
  app.bind('datasources.config.db').to({ name: 'db', connector: 'memory' });

  await app.start();

  const client = createRestAppClient(app);

  return { app, client };
}

export interface AppWithClient {
  app: HelloPlatformApplication;
  client: Client;
}
