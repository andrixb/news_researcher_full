import { Source } from '../../Domain/Entities/Article';

export interface INewsResearcherRequestPayloadResponse {
    source: Source;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    author?: string;
}
