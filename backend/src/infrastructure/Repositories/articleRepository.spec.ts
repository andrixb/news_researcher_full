import axios from 'axios';
import { listNewsEverything, NewsEverythingRequest } from './articleRepository';
import { newsEverythingMock } from '../../../__tests__/__mocks__/news/newsEverything.mock';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('Articles Repository', () => {
    const searchData: NewsEverythingRequest = {
        keyword: 'test'
    }

    beforeEach(() => {
        axiosMock.get.mockClear();
    });

    it('should return a list of news', async () => {
        axiosMock.get.mockResolvedValue({
            data: newsEverythingMock,
        });
        
        const results = await listNewsEverything(searchData);
        expect(results).toEqual(newsEverythingMock.articles);
    });

    it('should not return a list of news', async () => {
        axiosMock.get.mockRejectedValue('Error');
        axiosMock.get.mockResolvedValue({
            data: [],
        });
        
        const results = await listNewsEverything(searchData);
        expect(results).toEqual(undefined);
    });
});
