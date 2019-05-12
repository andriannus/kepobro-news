import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  constructor(private meta: MetaService) {
    this.setMeta();
  }

  ngOnInit() {
    window.onscroll = () => this.scroll();
  }

  setMeta() {
    this.meta.setTag(
      'og:image',
      'https://kepobro-news.herokuapp.com/assets/images/logo.jpg'
    );

    this.meta.setTag(
      'og:site_name',
      'KepoBro News'
    );

    this.meta.setTag(
      'og:type',
      'site.news'
    );

    this.meta.setTag(
      'twitter:card',
      'summary_large_image'
    );

    this.meta.setTag(
      'twitter:image',
      'https://kepobro-news.herokuapp.com/assets/images/logo.jpg'
    );

    this.meta.setTag(
      'twitter:site',
      'KepoBro News'
    );
  }

  scroll() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById('btnBackToTop').style.display = 'block';
    } else {
      document.getElementById('btnBackToTop').style.display = 'none';
    }
  }

  toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
