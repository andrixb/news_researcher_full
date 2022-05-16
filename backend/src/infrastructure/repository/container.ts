import { AwilixContainer, createContainer, Lifetime } from 'awilix';
import { ArticleRepository } from './article-repository';

let container: AwilixContainer;

export function getRepositoryContainer() {
  if (!container) {
    container = createContainer();

    container.loadModules([`${__dirname}/**/!(*.spec)!(*.test)*.{ts,js}`], {
      formatName: 'camelCase',
      resolverOptions: {
        lifetime: Lifetime.SINGLETON,
      },
    });
  }
  return container;
}

export interface RepositoryDependencies {
  articleRepository: ArticleRepository;
}
