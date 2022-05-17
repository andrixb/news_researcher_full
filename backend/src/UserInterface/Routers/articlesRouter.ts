import express from 'express';
import { handleRoute } from '../../Infrastructure/http';
import { redisCacheMiddleware } from '../../Infrastructure/Middleware/redisCacheMiddleware';
import { listAllCachedArticles } from '../Controllers/articlesController';

export default (() => {
    const router = express.Router();
    // router.get('/all', redisCacheMiddleware, function(req, res){ console.log('here'); res.send('done'); });
    router.get('/all', handleRoute(listAllCachedArticles));
    return router;
})();
