import { Response, Article } from 'src/interfaces/article';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    private newsService: NewsService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Technology - KepoBro News');

    this.getNews();
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
