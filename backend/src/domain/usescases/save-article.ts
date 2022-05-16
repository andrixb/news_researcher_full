import { Dependencies } from '../../container';
import { Article } from '../entities/article';

const saveArticle = ({ articleService }: Dependencies) => {
  return async function (article: Article) {
    return articleService.saveArticle(article);
  };
};

export default saveArticle;
