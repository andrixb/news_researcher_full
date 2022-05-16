import { AwilixContainer, createContainer, Lifetime } from 'awilix';

import listAllArticles from './list-all-articles';
import saveArticle from './save-article';

let container: AwilixContainer;

export function getUseCaseContainer() {
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

export type UseCaseDependencies = {
  listAllArticles: ReturnType<typeof listAllArticles>;
  saveArticle: ReturnType<typeof saveArticle>;
};
