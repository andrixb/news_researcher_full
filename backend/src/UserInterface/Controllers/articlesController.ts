import listAllArticles from '../../Domain/useCases/listAllArticles';

export const listAllCachedArticles = async (req, res) => {
    const  keyword = req.query.q as string;
    const result = await listAllArticles({ keyword });
        
    return res.status(200).json(result);
};
