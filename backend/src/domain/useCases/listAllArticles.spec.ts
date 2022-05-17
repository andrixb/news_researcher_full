import axios from 'axios';
import listAllArticles from './listAllArticles';
import { newsEverythingMock } from '../../../__tests__/__mocks__/news/newsEverything.mock';
import { NewsEverythingRequest } from '../../Infrastructure/Repositories/articleRepository';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('listAllArticles', () => {
    const searchData: NewsEverythingRequest = {
        keyword: 'test'
    }

    it('should receive all articles', async () => {
        axiosMock.get.mockResolvedValue({
            data: newsEverythingMock,
        });

        const result = await listAllArticles(searchData);
        expect(result).toEqual(newsEverythingMock.articles);
    });

    it('should not return any article', async () => {
        axiosMock.get.mockRejectedValue('Error');
        axiosMock.get.mockResolvedValue({
            data: [],
        });
        
        const results = await listAllArticles(searchData);
        expect(results).toEqual(undefined);
    });
});
