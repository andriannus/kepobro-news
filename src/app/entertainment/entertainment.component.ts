import { Response, Article } from '../../interfaces/article';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})

export class EntertainmentComponent implements OnInit {

  articles: Article[];
  isLoading = false;

  constructor(
    private meta: Meta,
    private newsService: NewsService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Entertainment - KepoBro News');

    this.setMeta();
    this.getNews();
  }

  setMeta() {
    this.meta.addTag({
      name: 'description',
      content: 'Berita lengkap dan terupdate mengenai hiburan dari News API'
    }, true);

    this.meta.addTag({
      name: 'title',
      content: 'Entertainment - KepoBro News'
    });

    this.meta.addTag({
      name: 'og:description',
      content: 'Berita lengkap dan terupdate mengenai hiburan dari News API'
    });

    this.meta.addTag({
      name: 'og:title',
      content: 'Entertainment - KepoBro News'
    });

    this.meta.addTag({
      name: 'og:url',
      content: 'https://kepobro-news.netlify.com'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Berita lengkap dan terupdate mengenai hiburan dari News API'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'Entertainment - KepoBro News'
    });
  }

  getNews() {
    this.isLoading = true;

    this.newsService
      .getFromEntertainmentCategory()
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
