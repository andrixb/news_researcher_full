import { RequestHandler } from 'express';
import listAllArticles from '../../Domain/useCases/listAllArticles';

export const listAllCachedArticles = async (req, res) => {
    console.info('here')
    const keyword = req.query.q as string;
    return res.status(200).json(await listAllArticles({ keyword }));
};
