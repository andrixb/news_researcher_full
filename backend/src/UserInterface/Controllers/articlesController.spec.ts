import axios from 'axios';
import * as articlesController from './articlesController';
import { newsEverythingMock } from '../../../__tests__/__mocks__/news/newsEverything.mock';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('articlesController', () => {
    test('listAllCachedArticles', async () => {
        axiosMock.get.mockResolvedValue({
            data: newsEverythingMock,
        });

        const mockRequest = {
            query: {
                q: 'test'
            }
        };

        const mockReponse = {
            status: () => mockReponse,
            json: () => newsEverythingMock.articles,
        };

        const result = await articlesController.listAllCachedArticles(mockRequest, mockReponse);
        expect(result).toEqual(newsEverythingMock.articles);
    });
});
