import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

import { Article, Response } from '@app/shared/consts/model.const';
import { ApiService } from '@app/shared/services/api.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})

export class ScienceComponent implements OnInit {

  articles: Article[];
  isLoading = false;

  constructor(
    private meta: MetaService,
    private apiService: ApiService,
  ) {
    this.meta.setTitle('Science - KepoBro News');

    this.setMeta();
  }

  ngOnInit() {
    this.getNews();
  }

  setMeta() {
    this.meta.setTag(
      'description',
      'Berita lengkap dan terupdate mengenai pengetahuan dari News API'
    );

    this.meta.setTag(
      'og:description',
      'Berita lengkap dan terupdate mengenai pengetahuan dari News API'
    );

    this.meta.setTag(
      'og:title',
      'Science - KepoBro News'
    );

    this.meta.setTag(
      'og:url',
      'https://kepobro-news.herokuapp.com'
    );

    this.meta.setTag(
      'twitter:description',
      'Berita lengkap dan terupdate mengenai pengetahuan dari News API'
    );

    this.meta.setTag(
      'twitter:title',
      'Science - KepoBro News'
    );
  }

  getNews() {
    this.isLoading = true;

    this.apiService
      .fetchNewsData('science')
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

  readArticle(article: Article) {
    this.apiService.readArticle(article);
  }

}
