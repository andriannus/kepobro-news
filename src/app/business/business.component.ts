import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

import { Article, Response } from '@app/shared/consts/model.const';
import { ApiService } from '@app/shared/services/api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})

export class BusinessComponent implements OnInit {

  public articles: Article[];
  public isLoading = false;

  constructor(
    private meta: MetaService,
    private apiService: ApiService,
  ) {
    this.meta.setTitle('Business - KepoBro News');

    this.setMeta();
  }

  public ngOnInit(): void {
    this.getNews();
  }

  public setMeta(): void {
    this.meta.setTag(
      'description',
      'Berita lengkap dan terupdate mengenai bisnis dari News API'
    );

    this.meta.setTag(
      'og:description',
      'Berita lengkap dan terupdate mengenai bisnis dari News API'
    );

    this.meta.setTag(
      'og:title',
      'Business - KepoBro News'
    );

    this.meta.setTag(
      'og:url',
      'https://kepobro-news.herokuapp.com'
    );

    this.meta.setTag(
      'twitter:description',
      'Berita lengkap dan terupdate mengenai bisnis dari News API'
    );

    this.meta.setTag(
      'twitter:title',
      'Business - KepoBro News'
    );
  }

  public getNews(): void {
    this.isLoading = true;

    this.apiService
      .fetchNewsData('business')
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
