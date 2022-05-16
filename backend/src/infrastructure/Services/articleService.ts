import { Dependencies } from '../../container';
import { Article } from '../../Domain/Entities/Article';
import { ResourceNotFoundError } from './resourceNotFound';

export default function makeArticleService  ({ articleRepository }: Partial<Dependencies>)  {
  return {
    listArticles() {
      return articleRepository.listArticles();
    },
    async findArticle(id: string) {
      const article = await articleRepository.findArticle(id);
      if (!article) {
        throw new ResourceNotFoundError('article');
      }
      return article;
    },
    saveArticle(article) {
      return articleRepository.saveArticle(article);
    },
    async removeArticle(id: string) {
      const article = await articleRepository.removeArticle(id);
      if (!Article) {
        throw new ResourceNotFoundError('article');
      }
      return article;
    },
  } as ArticleService;
};


export interface ArticleService {
  listArticles(): Promise<Article[]>;
  findArticle(id: string): Promise<Article>;
  saveArticle(article: Article): Promise<Article>;
  removeArticle(id: string): Promise<Article>;
}
