import { Dependencies } from '../../container';

export default function makeListAllArticles ({ articleService }: Partial<Dependencies>) {
  return async function () {
    return articleService.listArticles();
  };
};
