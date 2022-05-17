import express from 'express';
import { handleRoute } from '../../Infrastructure/http';
import { listAllCachedArticles } from '../Controllers/articlesController';

export default (() => {
    const router = express.Router();
    router.get('/all', handleRoute(listAllCachedArticles));
    return router;
})();
