import { AwilixContainer, createContainer, Lifetime } from 'awilix';

import articlesController from './articles-controller';
import mainController from './main-controller';

let container: AwilixContainer;

export function getControllerContainer() {
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

export interface ControllerDependencies {
  articlesController: ReturnType<typeof articlesController>;
  mainController: ReturnType<typeof mainController>;
}
