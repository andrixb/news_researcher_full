import { IArticle } from '../../Infrastructure/Interfaces/IArticle';
import { Source } from './Source';

export default class Article {
    source: Source;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    author?: string;

    constructor({ source, title, description, url, urlToImage, publishedAt, content, author }: IArticle) {
        this.source = source;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
        this.content = content;
        this.author = author;
    }
}
