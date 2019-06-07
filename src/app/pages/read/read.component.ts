import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

import { Article } from '@app/shared/consts/model.const';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})

export class ReadComponent implements OnInit {

  public article: Article;
  public isNotFound = false;

  constructor(
    private location: Location,
    private meta: MetaService
    ) {
      this.meta.setTitle('Read News - KepoBro News');

      this.setMeta();
    }

  public ngOnInit(): void {
    this.getArticle();
  }

  public get formattedArticle(): string {
    const { content } = this.article;

    if (!!content === true) {
      const tempArr = content.split('');
      const startSub = tempArr.indexOf('[');
      const finishSub = tempArr.indexOf(']');
      const substractSub = Number(finishSub) - Number(startSub) + 1;
      const findString = content.substr(startSub, substractSub);
      const resultString = content.replace(findString, '');

      return resultString;
    } else {
      return '';
    }
  }

  public setMeta(): void {
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

  public getArticle(): void {
    const data = localStorage.getItem('article') || '';

    if (!!data === true) {
      this.isNotFound = false;

      this.article = JSON.parse(data);
    } else {
      this.isNotFound = true;
    }
  }

  public back(): void {
    localStorage.removeItem('article');

    this.location.back();
  }

}
