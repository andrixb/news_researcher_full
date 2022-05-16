import express from 'express';
import { handleRoute } from '../../Infrastructure/http';
import { redisCacheMiddleware } from '../../Infrastructure/Middleware/redisCacheMiddleware';
import { listAllCachedArticles } from '../Controllers/articlesController';

export default () => {
    const router = express.Router();
    router.get('/', redisCacheMiddleware, handleRoute(listAllCachedArticles));
    return router;
};
