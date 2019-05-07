import { Response, Article } from '../../interfaces/article';
import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})

export class HealthComponent implements OnInit {

  articles: Article[];
  isLoading = false;

  constructor(
    private meta: MetaService,
    private newsService: NewsService,
  ) {
    this.meta.setTitle('Health - KepoBro News');

    this.setMeta();
  }

  ngOnInit() {
    this.getNews();
  }

  setMeta() {
    this.meta.setTag(
      'description',
      'Berita lengkap dan terupdate mengenai kesehatan dari News API'
    );

    this.meta.setTag(
      'og:description',
      'Berita lengkap dan terupdate mengenai kesehatan dari News API'
    );

    this.meta.setTag(
      'og:title',
      'Health - KepoBro News'
    );

    this.meta.setTag(
      'og:url',
      'https://kepobro-news.herokuapp.com'
    );

    this.meta.setTag(
      'twitter:description',
      'Berita lengkap dan terupdate mengenai kesehatan dari News API'
    );

    this.meta.setTag(
      'twitter:title',
      'Health - KepoBro News'
    );
  }

  getNews() {
    this.isLoading = true;

    this.newsService
      .getFromHealthCategory()
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
    this.newsService.readArticle(article);
  }

}
