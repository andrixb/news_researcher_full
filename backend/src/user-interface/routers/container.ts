import { AwilixContainer, createContainer, Lifetime } from 'awilix';

import articlesRouter from './articles-router';
import mainRouter from './main-router';

let container: AwilixContainer;

export function getRouterContainer() {
  if (!container) {
    container = createContainer();
    container.loadModules([`${__dirname}/!(*.spec)!(*.test)*.{ts,js}`], {
      formatName: 'camelCase',
      resolverOptions: {
        lifetime: Lifetime.SINGLETON,
      },
    });
  }
  return container;
}

export interface RouterDependencies {
  articlesRouter: ReturnType<typeof articlesRouter>;
  mainRouter: ReturnType<typeof mainRouter>;
}
