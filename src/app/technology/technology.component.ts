import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

import { Article, Response } from '@app/shared/consts/model.const';
import { ApiService } from '@app/shared/services/api.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})

export class TechnologyComponent implements OnInit {

  public articles: Article[];
  public isLoading = false;

  constructor(
    private meta: MetaService,
    private apiService: ApiService,
  ) {
    this.meta.setTitle('Technology - KepoBro News');

    this.setMeta();
  }

  public ngOnInit(): void {
    this.getNews();
  }

  public setMeta(): void {
    this.meta.setTag(
      'description',
      'Berita lengkap dan terupdate mengenai teknologi dari News API'
    );

    this.meta.setTag(
      'og:description',
      'Berita lengkap dan terupdate mengenai teknologi dari News API'
    );

    this.meta.setTag(
      'og:title',
      'Technology - KepoBro News'
    );

    this.meta.setTag(
      'og:url',
      'https://kepobro-news.herokuapp.com'
    );

    this.meta.setTag(
      'twitter:description',
      'Berita lengkap dan terupdate mengenai teknologi dari News API'
    );

    this.meta.setTag(
      'twitter:title',
      'Technology - KepoBro News'
    );
  }

  public getNews(): void {
    this.isLoading = true;

    this.apiService
      .fetchNewsData('technology')
      .subscribe(
        (data: Response) => {
          this.articles = data.articles;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
        }
      );
  }

  public readArticle(article: Article): void {
    this.apiService.readArticle(article);
  }

}
