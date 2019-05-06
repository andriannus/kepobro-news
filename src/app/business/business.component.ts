import { Response, Article } from 'src/interfaces/article';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})

export class BusinessComponent implements OnInit {

  articles: Article[];
  isLoading = false;

  constructor(
    private meta: Meta,
    private newsService: NewsService,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Business - KepoBro News');

    this.setMeta();
    this.getNews();
  }

  setMeta() {
    this.meta.addTag({
      name: 'description',
      content: 'Berita lengkap dan terupdate mengenai bisnis dari News API'
    }, true);

    this.meta.addTag({
      name: 'title',
      content: 'Business - KepoBro News'
    });

    this.meta.addTag({
      name: 'og:description',
      content: 'Berita lengkap dan terupdate mengenai bisnis dari News API'
    });

    this.meta.addTag({
      name: 'og:title',
      content: 'Business - KepoBro News'
    });

    this.meta.addTag({
      name: 'og:url',
      content: 'https://kepobro-news.netlify.com'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Berita lengkap dan terupdate mengenai bisnis dari News API'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'Business - KepoBro News'
    });
  }

  getNews() {
    this.isLoading = true;

    this.newsService
      .getFromBusinessCategory()
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
    this.router.navigateByUrl('/read');

    localStorage.setItem('article', JSON.stringify(article));
  }

}
