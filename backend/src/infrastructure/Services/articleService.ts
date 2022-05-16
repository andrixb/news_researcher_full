import Article from '../../Domain/Entities/Article';
import * as articleRepository from '../Repositories/articleRepository';

interface ArticlesService {
	listAllArticles: ({ keyword: string }) => Promise<Article[]>;
}

export const listAllArticles = async ({ keyword }: { keyword: string }) => await articleRepository.listNewsEverything({ keyword });
