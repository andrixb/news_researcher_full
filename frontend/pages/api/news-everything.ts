import type { NextApiRequest, NextApiResponse } from 'next';
import { ArticleType } from '../../src/NewsResearcher/Domain/Entities/Article';
import { apiInstance } from '../../src/Shared/Infrastructure/Api/apiClient';
import newsEverythingJSON from  '../../__tests__/__mocks__/news/newsEverything.json';

export interface INewsEverythingRequestPayloadResponse {
    articles: ArticleType[];
    status: string;
    totalResult: number;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const BASE_API_URL = process.env['NEXT_PUBLIC_EXT_HOSTNAME'];
    const API_EVERYTHING = 'v2/everything';

    // const { data } = await apiInstance.get<INewsEverythingRequestPayloadResponse>(
    //     `${BASE_API_URL}/${API_EVERYTHING}?q=${req.query.keyword}&apiKey=${process.env['NEXT_PUBLIC_API_FULL']}`,
    //     {}
    // );

    // console.log(data)

    res.status(200).json(newsEverythingJSON);
}



