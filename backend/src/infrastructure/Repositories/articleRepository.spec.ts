import axios from 'axios';
import { listNewsEverything, NewsEverythingRequest } from './articleRepository';
import { newsEverythingMock } from '../../../__tests__/__mocks__/news/newsEverything.mock';

const axiosMock = axios as jest.Mocked<typeof axios>;
describe('Articles Repository', () => {
    const data: NewsEverythingRequest = {
        keyword: 'test'
    }

    beforeEach(() => {
        axiosMock.get.mockClear();
    });

    it('returns a list of news', async () => {
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        axiosMock.get.mockImplementationOnce(() => Promise.resolve(newsEverythingMock));
        expect( await listNewsEverything(data)).toEqual(newsEverythingMock);
    });

    it('Should return empty data if response is rejected', async () => {
        axiosMock.get.mockRejectedValue('Error');
        const expectedResponse = {
            data: [],
        };
        expect(await listNewsEverything(data)).toEqual(expectedResponse);
    });

    it('Should return empty data if response is rejected', async () => {
        axiosMock.get.mockRejectedValue('Error');
        expect(await listNewsEverything(data)).toBeUndefined();
    });
});
