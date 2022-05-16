import express from 'express';

import articlesRouter from './articlesRouter';
import { handleRoute } from '../../Infrastructure/http';

export default () => {
    const router = express.Router();
    router.use('/articles', handleRoute(articlesRouter));
    return router;
};
