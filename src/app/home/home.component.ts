import { Response, Article } from 'src/interfaces/article';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
    private meta: Meta,
    private newsService: NewsService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('KepoBro News - Kepoin tentang yang hits saat ini!');

    this.setMeta();
    this.getNews();
  }

  setMeta() {
    this.meta.addTag({
      name: 'description',
      content: 'Berita lengkap dan terupdate dari News API'
    }, true);

    this.meta.addTag({
      name: 'title',
      content: 'KepoBro News - Kepoin tentang yang hits saat ini!'
    });

    this.meta.addTag({
      name: 'og:description',
      content: 'Berita lengkap dan terupdate dari News API'
    });

    this.meta.addTag({
      name: 'og:title',
      content: 'KepoBro News - Kepoin tentang yang hits saat ini!'
    });

    this.meta.addTag({
      name: 'og:url',
      content: 'https://kepobro-news.netlify.com'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Berita lengkap dan terupdate dari News API'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'KepoBro News - Kepoin tentang yang hits saat ini!'
    });
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

}
