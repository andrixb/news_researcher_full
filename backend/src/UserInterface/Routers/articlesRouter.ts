import express from 'express';
import { handleRoute } from '../../Infrastructure/http';
import { redisCacheMiddleware } from '../../Infrastructure/Middleware/redisCacheMiddleware';
import * as articlesController from '../Controllers/articlesController';

export default () => {
    const router = express.Router();
    router.get('/news-everything', redisCacheMiddleware, handleRoute(articlesController.listAllCachedArticles));
    return router;
};
