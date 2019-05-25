import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

import { Article, Response } from '@app/shared/consts/model.const';
import { ApiService } from '@app/shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  articles: Article[];
  isLoading = false;

  constructor(
    private meta: MetaService,
    private apiService: ApiService,
  ) {
    this.meta.setTitle('KepoBro News - Kepoin tentang yang hits saat ini!');

    this.setMeta();
  }

  ngOnInit() {
    this.getNews();
  }

  setMeta() {
    this.meta.setTag(
      'description',
      'Berita lengkap dan terupdate dari News API'
    );

    this.meta.setTag(
      'og:description',
      'Berita lengkap dan terupdate dari News API'
    );

    this.meta.setTag(
      'og:title',
      'KepoBro News - Kepoin tentang yang hits saat ini!'
    );

    this.meta.setTag(
      'og:url',
      'https://kepobro-news.herokuapp.com'
    );

    this.meta.setTag(
      'twitter:description',
      'Berita lengkap dan terupdate dari News API'
    );

    this.meta.setTag(
      'twitter:title',
      'KepoBro News - Kepoin tentang yang hits saat ini!'
    );
  }

  getNews() {
    this.isLoading = true;

    this.apiService
      .fetchNewsData()
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
