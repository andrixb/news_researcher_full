import ExpressRedisCache from 'express-redis-cache';

export const redisCacheMiddleware = () => {
    const CACHE_EXPIRE_TIME = 60;

    return ExpressRedisCache({
        expire: CACHE_EXPIRE_TIME,
    });
};
