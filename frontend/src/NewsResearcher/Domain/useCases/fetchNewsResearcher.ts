import getNewsResearcher, { NewsResearcherResponse } from '../../Infrastructure/Repositories/getNewsResearcher';


export interface fetchNewsResearcherProps { 
    keyword: string
}

export async function fetchNewsResearcher({ keyword }: fetchNewsResearcherProps): Promise<NewsResearcherResponse> {
    return await getNewsResearcher({ keyword });
}
