import Article from '../../Domain/Entities/Article';

export interface INewsEverythingRequestPayloadResponse {
    articles: Article[];
    status: string;
    totalResult: number;
}
