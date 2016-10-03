import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import { ArticlesService } from './articles.service';
import { Article } from './articles.model';


@Component({
  selector: 'home',
  providers: [
    Title
  ],
  templateUrl: './home.template.html',
  styleUrls: [ './home.style.css' ]
})
export class Home implements OnInit, OnDestroy {
  // Set our default values
  private sub: Subscription;
  private articles: Array<Article>;

  // TypeScript public modifiers
  constructor(public appState: AppState,
              public title: Title,
              private articlesService: ArticlesService) {
  }

  ngOnInit() {
    this.sub = this.articlesService.getArticles()
      .subscribe((resp: any) => this.articles = resp.articles);
    // this.title.setData().subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }
}
