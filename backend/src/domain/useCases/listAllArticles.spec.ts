import { Dependencies } from '../../container';
import { ObjectStub } from '../../TestHelpers/objectStub';
import makeListAllArticles from './listAllArticles';

describe('listAllArticles', () => {
  const stubs = {
    ArticleService: {
      listArticles: jest.fn(),
    } as ObjectStub<Dependencies['articleService']>,
  };
  const listAllArticles = makeListAllArticles(stubs);

  test('listAllArticles', async () => {
    const articles = await listAllArticles();
    expect(stubs.articleService.listArticles).toBeCalledTimes(1);
  });
});
