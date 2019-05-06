import { Response, Article } from 'src/interfaces/article';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})

export class ScienceComponent implements OnInit {

  articles: Article[];
  isLoading = false;

  constructor(
    private meta: Meta,
    private newsService: NewsService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Science - KepoBro News');

    this.setMeta();
    this.getNews();
  }

  setMeta() {
    this.meta.addTag({
      name: 'description',
      content: 'Berita lengkap dan terupdate mengenai pengetahuan dari News API'
    }, true);

    this.meta.addTag({
      name: 'title',
      content: 'Science - KepoBro News'
    });

    this.meta.addTag({
      name: 'og:description',
      content: 'Berita lengkap dan terupdate mengenai pengetahuan dari News API'
    });

    this.meta.addTag({
      name: 'og:title',
      content: 'Science - KepoBro News'
    });

    this.meta.addTag({
      name: 'og:url',
      content: 'https://kepobro-news.netlify.com'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Berita lengkap dan terupdate mengenai pengetahuan dari News API'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'Science - KepoBro News'
    });
  }

  getNews() {
    this.isLoading = true;

    this.newsService
      .getFromScienceCategory()
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
