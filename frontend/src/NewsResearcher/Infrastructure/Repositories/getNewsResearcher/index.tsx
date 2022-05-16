import { apiInstance } from '../../../../Shared/Infrastructure/Api/apiClient';
import { ArticleType } from '../../../Domain/Entities/Article';
import adaptNewsResearcherRequestPayload from '../../Adapters/adaptNewsResearcherRequestPayload';
import { INewsResearcherRequestPayloadResponse } from '../../Interfaces/INewsResearcherRequestPayloadResponse';


interface getNewsResearcherProps {
    keyword: string;
}

export type NewsResearcherResponse = {
    articles: ArticleType[];
};

export default async function getNewsResearcher({ keyword }: getNewsResearcherProps): Promise<NewsResearcherResponse> {
    const BASE_API_URL = process.env['NEXT_PUBLIC_INT_BASE_URL'];
    const API_EVERYTHING = 'articles/news-everything';

    const { data } = await apiInstance.get<INewsResearcherRequestPayloadResponse>(
        `${BASE_API_URL}/${API_EVERYTHING}?q=${keyword}`,
        {}
    );

    return adaptNewsResearcherRequestPayload(data); 
}
