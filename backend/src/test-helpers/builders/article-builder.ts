import { Article } from '../../domain/entities/article';
import { DeepWriteable, Properties } from '../../infrastructure/interfaces';

export class ArticleBuilder {
  private data: DeepWriteable<Properties<Article>> = {
    id: 'any-cat-id',
    name: 'any-cat-name',
  };

  with<K extends keyof Properties<Article>>(key: K, input: Article[K]) {
    this.data[key] = input;
    return this;
  }

  public build(): Article {
    return new Article(this.data as Article);
  }
}

// Example
const article = new ArticleBuilder().with('name', 'blacky').build();
