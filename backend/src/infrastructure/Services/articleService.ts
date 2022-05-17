import Article from '../../Domain/Entities/Article';
import * as articleRepository from '../Repositories/articleRepository';

export const listAllArticles: ({ keyword }: { keyword: string }) => Promise<Article[]> = 
	async ({ keyword }) =>
   		await articleRepository.listNewsEverything({ keyword });
