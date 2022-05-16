import express from 'express';
import { Dependencies } from '../../container';
import * as joi from 'joi';
import { handleRoute } from '../../infrastructure/http';
import { validateRequestPayload, ValidationTarget } from '../../infrastructure/middleware/validate-payload';
import { Article } from '../../domain/entities/article';

export default ({ articlesController }: Dependencies) => {
		const router = express.Router();

		router.get('/', handleRoute(articlesController.listAllArticles));

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
