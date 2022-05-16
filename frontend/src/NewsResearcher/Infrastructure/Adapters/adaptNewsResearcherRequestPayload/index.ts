import Article from '../../../Domain/Entities/Article';
import { INewsResearcherRequestPayloadResponse } from '../../Interfaces/INewsResearcherRequestPayloadResponse';
import { NewsResearcherResponse } from '../../Repositories/getNewsResearcher';

export default function adaptNewsResearcherRequestPayload(
    response: INewsResearcherRequestPayloadResponse
): NewsResearcherResponse {
    return {
        articles: response.articles.map((article) => new Article({ ...article })),
    };
}
