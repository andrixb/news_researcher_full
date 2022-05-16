import { ArticleType } from '../../Domain/Entities/Article';

export interface INewsResearcherRequestPayloadResponse {
    articles: ArticleType[];
    status: string;
    totalResult: number;
}
