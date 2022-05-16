import { AwilixContainer, createContainer, Lifetime } from 'awilix';
import { ArticleService } from './article-service';

let container: AwilixContainer;

export function getServiceContainer() {
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

export type ServiceDependencies = {
  articleService: ArticleService;
};
