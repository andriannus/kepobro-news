import { Response, Article } from 'src/interfaces/article';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    private newsService: NewsService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('KepoBro News - Kepoin tentang yang hits saat ini!');

    this.getNews();
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
