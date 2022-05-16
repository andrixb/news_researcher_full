import * as articleService from '../../Infrastructure/Services/articleService';

export default function listAllArticles({ keyword }: { keyword: string}) {
    return async function ({ keyword }: { keyword: string}) {
        return await articleService.listAllArticles({ keyword });
    };
}
