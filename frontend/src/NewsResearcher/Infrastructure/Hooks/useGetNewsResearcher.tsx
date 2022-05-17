import { useEffect, useState } from 'react';
import { ArticleType } from '../../Domain/Entities/Article';

import useDebounce from '../../../Shared/Infrastructure/Hooks/useDebounce';
import { NewsResearcherResponse } from '../Repositories/getNewsResearcher';
import { fetchNewsResearcher } from '../../Domain/useCases/fetchNewsResearcher';

interface useGetNewsResearcherProps {
    keyword: string;
}

export default function useGetNewsResearcher({ keyword }: useGetNewsResearcherProps) {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const [articlesError, setArticlesError] = useState<unknown>();

    const debouncedKeyword = useDebounce(keyword, 500);

    useEffect(() => {
        (async () => {
            try {
                if (keyword !== '') {
                    setArticlesError(undefined);
                    
                    const newsResearcherFetch: NewsResearcherResponse = await fetchNewsResearcher({ keyword });

                    if (newsResearcherFetch) {
                        setArticles(newsResearcherFetch.articles);
                    }
                }
            } catch (error) {
                setArticlesError(error);
            }
        })();
    }, [debouncedKeyword]);

    return { articles, articlesError };
}
