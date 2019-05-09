import * as moment from 'moment';
import { Article } from '../../interfaces/article';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})

export class ReadComponent implements OnInit {

  article: Article;
  isNotFound = false;

  constructor(
    private location: Location,
    private meta: MetaService
    ) {
      this.meta.setTitle('Read News - KepoBro News');

      this.setMeta();
    }

  ngOnInit() {
    this.getArticle();
  }

  get formattedDate() {
    moment.locale('id');

    return moment(this.article.publishedAt).format('dddd, Do MMMM YYYY · h:mm');
  }

  get formattedArticle() {
    const { content } = this.article;
    const tempArr = content.split('');
    const startSub = tempArr.indexOf('[');
    const finishSub = tempArr.indexOf(']');
    const substractSub = Number(finishSub) - Number(startSub) + 1;
    const findString = content.substr(startSub, substractSub);
    const resultString = content.replace(findString, '');

    return resultString;
  }

  setMeta() {
    this.meta.setTag(
      'description',
      'Baca berita terpilih dari News API'
    );

    this.meta.setTag(
      'og:description',
      'Baca berita terpilih dari News API'
    );

    this.meta.setTag(
      'og:title',
      'Read News - KepoBro News'
    );

    this.meta.setTag(
      'og:url',
      'https://kepobro-news.herokuapp.com'
    );

    this.meta.setTag(
      'twitter:description',
      'Baca berita terpilih dari News API'
    );

    this.meta.setTag(
      'twitter:title',
      'Read News - KepoBro News'
    );
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
