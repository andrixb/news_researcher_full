import * as articleService from '../../Infrastructure/Services/articleService';

export default async function listAllArticles({ keyword }: { keyword: string}) {
    return await articleService.listAllArticles({ keyword });
}
