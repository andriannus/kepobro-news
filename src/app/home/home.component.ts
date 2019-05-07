import { Response, Article } from '../../interfaces/article';
import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { NewsService } from '../news.service';

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
    private newsService: NewsService,
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
      'https://kepobro-news.netlify.com'
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

    this.newsService
      .getFromAllCategories()
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
