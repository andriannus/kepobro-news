import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})

export class PageNotFoundComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  public ngOnInit(): void {
    this.titleService.setTitle('Page Not Found - KepoBro News');
  }

}
