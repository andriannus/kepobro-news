import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '@ngx-meta/core';

import { Article, Response } from '@app/shared/consts/model.const';
import { NEWS } from '@app/shared/consts/news.const';
import { ApiService } from '@app/shared/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  public articles: Article[];
  public categories = NEWS.CATEGORIES;
  public category: number;
  public isLoading = false;
  public title: string;

  constructor(
    private apiService: ApiService,
    private meta: MetaService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.route.data.subscribe((url) => {
      this.category = url.category;
    });

    this.meta.setTitle(this.getMetaTitle(this.category));

    this.title = this.getTitle(this.category);

    this.setMeta();
    this.getNews();
  }

  public setMeta(): void {
    this.meta.setTag(
      'description',
      this.getMetaDescription(this.category)
    );

    this.meta.setTag(
      'og:description',
      this.getMetaDescription(this.category)
    );

    this.meta.setTag(
      'og:title',
      this.getMetaTitle(this.category)
    );

    this.meta.setTag(
      'og:url',
      'https://kepobro-news.herokuapp.com'
    );

    this.meta.setTag(
      'twitter:description',
      this.getMetaDescription(this.category)
    );

    this.meta.setTag(
      'twitter:title',
      this.getMetaTitle(this.category)
    );
  }

  public getNews(): void {
    let selectedCategory: string | undefined;

    if (this.category > 0) {
      selectedCategory = this.categories[this.category].en.toLowerCase();
    } else {
      selectedCategory = undefined;
    }

    this.isLoading = true;

    this.apiService
      .fetchNewsData(selectedCategory)
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

  public getMetaTitle(category: number): string {
    const selectedCategory = this.categories[category].en;
    let metaTitle = '';

    if (category === 0) {
      metaTitle = this.categories[0].title;
    } else {
      metaTitle = `${selectedCategory} - KepoBro News`;
    }

    return metaTitle;
  }

  public getMetaDescription(category: number): string {
    const selectedCategory = this.categories[category].id;
    let metaDesc = '';

    if (category === 0) {
      metaDesc = this.categories[0].desc;
    } else {
      metaDesc = `Berita lengkap dan terupdate mengenai ${selectedCategory} dari News API`;
    }

    return metaDesc;
  }

  public getTitle(category: number): string {
    const selectedCategory = this.categories[this.category].en;
    let title = '';

    if (category === 0) {
      title = 'Trending';
    } else {
      title = selectedCategory;
    }

    return title;
  }

  public readArticle(article: Article): void {
    this.apiService.readArticle(article);
  }

}
