import { RequestHandler } from 'express';

export default () => {
  return {
    index: async function (req, res, next) {
      return res.json({ api: 'articles' });
    } as RequestHandler,
  };
};
