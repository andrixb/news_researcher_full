import { Request, Response } from 'express';
import { Dependencies } from '../../container';
import { Article } from '../../domain/entities/article';
import { BaseObject } from '../../infrastructure/interfaces';
import { ArticleBuilder } from '../../test-helpers/builders/article-builder';
import { typedStub } from '../../test-helpers/typed-stub';
import makeArticlesController from './articles-controller';

describe('articlesController', () => {

const stubs = {
  json: typedStub<Response['json']>(),
  status: typedStub<Response['status']>(),
  next: jest.fn(),
  listAllCats: typedStub<Dependencies['listAllArticles']>(),
  saveCat: typedStub<Dependencies['saveArticle']>(),
};


const articlesController = makeArticlesController(stubs);


describe('listAllArticles', () => {
  let body: BaseObject;
  let res: Partial<Response>;
  let req: Partial<Request>;
  let defaultArticle: Article;

  // method specific beforeEach
  beforeEach(() => {
    jest.resetAllMocks();
    body = {};
    req = {
      params: {},
      body: {},
      query: {},
    } as Partial<Request>;
    res = {
      json: stubs.json,
      status: stubs.status,
    } as Partial<Response>;
    stubs.json.mockReturnValue(res as any);
    stubs.status.mockReturnValue(res as any);

    defaultArticle = new ArticleBuilder().build();
    stubs.listAllArticles.mockReturnValue(Promise.resolve([defaultArticle]));
  });

  test('flow', async () => {
    await articlesController.listAllArticles(req as any, res as any, stubs.next);
    expect(stubs.listAllArticles).toBeCalledTimes(1);
    expect(stubs.status).toBeCalledTimes(1);
    expect(stubs.json).toBeCalledTimes(1);
  });

  test('jsonArgs', async () => {
    await articlesController.listAllArticles(req as any, res as any, stubs.next);
    const [jsonArgs] = stubs.json.mock.calls[0];
    expect(jsonArgs).toEqual([defaultArticle]);
  });

  test('status args', async () => {
    await articlesController.listAllArticles(req as any, res as any, stubs.next);
    const [statusArgs] = stubs.status.mock.calls[0];
    expect(statusArgs).toEqual(200);
  });
});

describe('saveArticle', () => {
  let body: BaseObject;
  let res: Partial<Response>;
  let req: Partial<Request>;
  let defaultArticle: Article;

  // method specific beforeEach
  beforeEach(() => {
    jest.resetAllMocks();
    body = {};
    req = {
      params: {},
      body: {
        name: 'blacky',
      },
      query: {},
    } as Partial<Request>;
    res = {
      json: stubs.json,
      status: stubs.status,
    } as Partial<Response>;
    stubs.json.mockReturnValue(res as any);
    stubs.status.mockReturnValue(res as any);

    // set default variables
    defaultArticle = new ArticleBuilder().build();
    stubs.saveArticle.mockReturnValue(Promise.resolve(defaultArticle));
  });

  test('flow', async () => {
    await articlesController.saveArticle(req as any, res as any, stubs.next);
    expect(stubs.saveArticle).toBeCalledTimes(1);
    expect(stubs.status).toBeCalledTimes(1);
    expect(stubs.json).toBeCalledTimes(1);
  });

  test('jsonArgs', async () => {
    await articlesController.saveArticle(req as any, res as any, stubs.next);
    const [jsonArgs] = stubs.json.mock.calls[0];
    expect(jsonArgs).toEqual(defaultArticle);
  });

  test('status args', async () => {
    await articlesController.saveArticle(req as any, res as any, stubs.next);
    const [statusArgs] = stubs.status.mock.calls[0];
    expect(statusArgs).toEqual(201);
  });

  test('useCase args', async () => {
    await articlesController.saveArticle(req as any, res as any, stubs.next);
    const [saveArticleArgs] = stubs.saveArticle.mock.calls[0];
    expect(saveArticleArgs.name).toEqual(req.body.name);
  });
});

});
