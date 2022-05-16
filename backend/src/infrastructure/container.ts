import { AwilixContainer, createContainer, Lifetime } from 'awilix';
import { getRepositoryContainer, RepositoryDependencies } from './Repositories/container';
import { DatabaseClient } from './databaseClient';

import express from 'express';

let container: AwilixContainer;

export function getInfrastructureContainer() {
  if (!container) {
    container = createContainer();
    container.loadModules([`${__dirname}/database!(*.spec)!(*.test)*.{ts,js}`, `${__dirname}/middleware/**/!(*.spec)!(*.test)*.{ts,js}`], {
      formatName: 'camelCase',
      resolverOptions: {
        lifetime: Lifetime.SINGLETON,
      },
    });

    container.register(getRepositoryContainer().registrations);
  }
  return container;
}

export type InfrastructureDependencies = {
  databaseClient: DatabaseClient;
  errorHandlingMiddleware: express.RequestHandler;
} & RepositoryDependencies;
