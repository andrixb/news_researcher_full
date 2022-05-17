import { listNewsEverything, NewsEverythingRequest } from './articleRepository';
import { newsEverythingMock } from '../../../__tests__/__mocks__/news/newsEverything.mock';
import axios from 'axios';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('Articles Repository', () => {
    const searchData: NewsEverythingRequest = {
        keyword: 'test'
    }

    beforeEach(() => {
        axiosMock.get.mockClear();
    });

    it('returns a list of news', async () => {
        axiosMock.get.mockResolvedValue({
            data: newsEverythingMock,
        });
        
        const results = await listNewsEverything(searchData);
        expect(results).toEqual(newsEverythingMock.articles);
    });
});
