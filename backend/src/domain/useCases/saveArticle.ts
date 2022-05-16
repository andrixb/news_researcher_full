import { Dependencies } from '../../container';
import { Article } from '../Entities/Article';

const saveArticle = ({ articleService }: Dependencies) => {
  return async function (article: Article) {
    return articleService.saveArticle(article);
  };
};

export default saveArticle;
