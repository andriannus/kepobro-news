import { Response, Article } from 'src/interfaces/article';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})

export class TechnologyComponent implements OnInit {

  articles: Article[];
  isLoading = false;

  constructor(
    private meta: Meta,
    private newsService: NewsService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Technology - KepoBro News');

    this.setMeta();
    this.getNews();
  }

  setMeta() {
    this.meta.addTag({
      name: 'description',
      content: 'Berita lengkap dan terupdate mengenai teknologi dari News API'
    }, true);

    this.meta.addTag({
      name: 'title',
      content: 'Technology - KepoBro News'
    });

    this.meta.addTag({
      name: 'og:description',
      content: 'Berita lengkap dan terupdate mengenai teknologi dari News API'
    });

    this.meta.addTag({
      name: 'og:title',
      content: 'Technology - KepoBro News'
    });

    this.meta.addTag({
      name: 'og:url',
      content: 'https://kepobro-news.netlify.com'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Berita lengkap dan terupdate mengenai teknologi dari News API'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'Technology - KepoBro News'
    });
  }

  getNews() {
    this.isLoading = true;

    this.newsService
      .getFromTechnologyCategory()
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
