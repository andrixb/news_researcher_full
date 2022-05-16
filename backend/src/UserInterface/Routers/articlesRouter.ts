import express from 'express';
import { Dependencies } from '../../container';
import * as joi from 'joi';
import { handleRoute } from '../../Infrastructure/http';
import { validateRequestPayload, ValidationTarget } from '../../Infrastructure/Middleware/validatePayload';
import { redisCacheMiddleware } from '../../Infrastructure/Middleware/redisCacheMiddleware';
import { Article } from '../../Domain/Entities/Article';

export default ({ articlesController }: Dependencies) => {
		const router = express.Router();

		router.get('/', handleRoute(articlesController.listAllArticles));

		router.get('/articles-cached', redisCacheMiddleware.route(), handleRoute(articlesController.listAllCachedArticles));

		router.post(
				'/',
				validateRequestPayload(
						joi.object<Article>().keys({
								id: joi.string().optional(),
								name: joi.string().required(),
						}),
						ValidationTarget.BODY
				),
				handleRoute(articlesController.saveArticle)
		);

		return router;
};
