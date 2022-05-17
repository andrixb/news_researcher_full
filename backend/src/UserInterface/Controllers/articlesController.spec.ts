import { Request, Response } from 'express';
import * as articlesController from './articlesController';

describe('articlesController', () => {
    test('listAllCachedArticles', async () => {

        const result = await articlesController.listAllCachedArticles(Request, Response);
        expect(articlesController.listAllCachedArticles).toBeCalledTimes(1);
    });
});
