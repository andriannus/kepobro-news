import * as moment from 'moment';
import { Article } from 'src/interfaces/article';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})

export class ReadComponent implements OnInit {

  article: Article;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getArticle();
  }

  get formattedDate() {
    moment.locale('id');

    return moment(this.article.publishedAt).format('dddd, Do MMMM YYYY · h:mm');
  }

  getArticle() {
    const data = localStorage.getItem('article') || '';

    this.article = JSON.parse(data);
  }

  back() {
    localStorage.removeItem('article');

    this.router.navigateByUrl('/');
  }

}
