import { AwilixContainer, createContainer, Lifetime } from 'awilix';

import articlesRouter from './articlesRouter';
import mainRouter from './mainRouter';

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
