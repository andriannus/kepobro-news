import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let ga: (action: string, field: string, url?: string) => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageView');
      }
    });
  }
}
