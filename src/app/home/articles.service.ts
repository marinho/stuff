import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Article, ArticlesPayload } from './articles.model';

@Injectable()
export class ArticlesService {
    private articlesUrl = '/assets/articles/index.json';

    constructor (private http: Http) {}

    getArticles(): Observable<ArticlesPayload> {
        return this.http.get(this.articlesUrl)
            .map(this.prepareResponse);
            // .catch(this.handleError);
    }

    private prepareResponse(res: Response) {
        let data: ArticlesPayload = res.json();
        return {
            articles: data.articles.map(a => new Article(a))
        } as ArticlesPayload;
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}