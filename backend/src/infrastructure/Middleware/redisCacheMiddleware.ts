import ExpressRedisCache from 'express-redis-cache';

export const redisCacheMiddleware = () => {
    const CACHE_UPDATE_TIME = 60;
    
    const cache = ExpressRedisCache({
        expire: CACHE_UPDATE_TIME,
    });
    return cache;
};
