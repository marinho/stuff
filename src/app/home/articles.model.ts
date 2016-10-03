import * as moment from 'moment';

export class Article {
    url: string;
    slug: string;
    title: string;
    published: string;

    constructor(data: any) {
        this.url = data.url;
        this.slug = data.slug;
        this.title = data.title;
        this.published = data.published;
    }

    get timeSincePublished() {
        return moment(this.published).fromNow();
    }
}

export interface ArticlesPayload {
    articles: Article[];
}
