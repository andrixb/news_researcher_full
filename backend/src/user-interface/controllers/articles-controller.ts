import { RequestHandler } from 'express';
import { Dependencies } from '../../container';
import { Article } from '../../domain/entities/article';

export default function makeArticlesController ({ listAllArticles, saveArticle }: Partial<Dependencies>) {
  return {
    listAllArticles: async function (req, res) {
      return res.status(200).json(await listAllArticles());
    } as RequestHandler,
    saveArticle: async function (req, res) {
      return res.status(201).json(await saveArticle(new Article(req.body)));
    } as RequestHandler,
  };
};
