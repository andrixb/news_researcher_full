import { Dependencies } from '../../container';
import { Article } from '../../Domain/Entities/Article';
import { apiInstance } from '../Api/apiClient';
import { adaptResult } from '../databaseClient';
import { INewsResearcherRequestPayloadResponse } from '../Interfaces/INewsResearcherRequestPayloadResponse';

export default ({ databaseClient }: Dependencies) => {
    const collectionName = 'article';
    return {
        collectionName,
        async listArticles() {
            const dbObjs = await databaseClient.getCollection(collectionName).find().toArray();
            return dbObjs.map((d) => restore(d));
        },
        async findArticle(id: string) {
            const dbObj = await databaseClient.getCollection(collectionName).findOne({ id });
            return dbObj ? restore(dbObj) : null;
        },
        // async listAllArticles() {
        //     const { data } = await apiInstance.get<INewsResearcherRequestPayloadResponse>(
        //         `${BASE_API_URL}/${API_EVERYTHING}?q=${keyword}`,
        //         {}
        //     );
        // },
        async saveArticle(article) {
            const dbObj = adaptResult(
                await databaseClient.getCollection(collectionName).findOneAndUpdate(
                    { id: article.id },
                    { $set: adapt(article) },
                    {
                        upsert: true,
                        returnOriginal: false,
                    }
                )
            );
            return dbObj ? restore(dbObj) : null;
        },
        async removeArticle(id: string) {
            const dbObj = adaptResult(await databaseClient.getCollection(collectionName).findOneAndDelete({ id }));
            return dbObj ? restore(dbObj) : null;
        },
    } as ArticleRepository;
};

export interface ArticleRepository {
    listArticles(): Promise<Article[]>;

    // listAllArticles(): Promise<Article[]>;

    findArticle(id: string): Promise<Article | null>;

    saveArticle(article: Article): Promise<Article | null>;

    removeArticle(id: string): Promise<Article | null>;
}

function adapt(input: Article) {
    return {
        id: input.id,
        name: input.name,
    };
}

function restore(dbInput: ReturnType<typeof adapt>): Article {
    return new Article({ id: dbInput.id, name: dbInput.name });
}
