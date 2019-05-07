import * as moment from 'moment';
import { Article } from '../../interfaces/article';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})

export class ReadComponent implements OnInit {

  article: Article;
  isNotFound = false;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.getArticle();
  }

  get formattedDate() {
    moment.locale('id');

    return moment(this.article.publishedAt).format('dddd, Do MMMM YYYY · h:mm');
  }

  getArticle() {
    const data = localStorage.getItem('article') || '';

    if (!!data === true) {
      this.isNotFound = false;

      this.article = JSON.parse(data);
    } else {
      this.isNotFound = true;
    }
  }

  back() {
    localStorage.removeItem('article');

    this.location.back();
  }

}
