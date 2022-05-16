import ExpressRedisCache from 'express-redis-cache';

export const redisCacheMiddleware = () => {
    const CACHE_EXPIRE_TIME = 60;
    const REDIS_PORT = 6379;

    return ExpressRedisCache({
        expire: CACHE_EXPIRE_TIME,
        port: REDIS_PORT,
    });
};
