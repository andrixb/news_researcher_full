import { Dependencies } from '../../container';
import { ArticleBuilder } from '../../TestHelpers/Builders/articleBuilder';
import { ObjectStub } from '../../TestHelpers/objectStub';
import { Article } from '../../Domain/Entities/Article';
import makeArticleService from './articleService';

describe('saveArticle', () => {
	let defaultInputArticle: Article;
	let defaultSavedArticle: Article;

	const stubs = {
		articleRepository: {
			saveArticle: jest.fn(),
		} as ObjectStub<Dependencies['articleRepository']>,
	};

	const articleService = makeArticleService(stubs);

	beforeEach(() => {
		jest.resetAllMocks();

		defaultInputArticle = new ArticleBuilder().with('name', 'not-saved').build();
		defaultSavedArticle = new ArticleBuilder().with('name', 'saved').build();

		stubs.articleRepository.saveArticle.mockReturnValue(Promise.resolve(defaultSavedArticle));
	});



	test('Happy path', async () => {
		const newArticle = await articleService.saveArticle(defaultInputArticle);
		expect(newArticle).toEqual(defaultSavedArticle);
		expect(stubs.articleRepository.saveArticle).toBeCalledTimes(1);
	});

	test('saveArticle Args', async () => {
		const newArticle = await articleService.saveArticle(defaultInputArticle);
		const saveArticleArgs = stubs.articleRepository.saveArticle.mock.calls[0];
		expect(saveArticleArgs).toHaveLength(1);
		const [articleToBeSaved] = saveArticleArgs;
		expect(articleToBeSaved).toEqual(defaultInputArticle);
	});


});
