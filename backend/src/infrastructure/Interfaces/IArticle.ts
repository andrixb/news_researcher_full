import { Source } from '../../Domain/Entities/Source';

export interface IArticle {
    source: Source;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    author?: string;
}
