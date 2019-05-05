import { Response, Article } from 'src/interfaces/article';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    private newsService: NewsService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Business - KepoBro News');

    this.getNews();
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

}
