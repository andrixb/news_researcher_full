import { Dependencies } from '../../container';
import { ObjectStub } from '../../test-helpers/object-stub';
import makeListAllArticles from './list-all-articles';

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
