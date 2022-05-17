import Article from '../../Domain/Entities/Article';
import { apiInstance } from '../Api/apiClient';
import { INewsEverythingRequestPayloadResponse } from '../Interfaces/INewsEverythingRequestPayloadResponse';

interface NewsEverythingRequest {
    keyword: string;
}

export const listNewsEverything = async ({ keyword }: NewsEverythingRequest): Promise<Article[]> => {
    const { data } = await apiInstance.get<INewsEverythingRequestPayloadResponse>(
        `${process.env.BASE_API_URL}/${process.env.API_URL_EVERYTHING}?q=${keyword}&apiKey=${process.env.API_KEY}`,
        {}
    );
    return data.articles;
};
