import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { GoogleAnalytics } from '@app/shared/consts/model.const';

declare let ga: GoogleAnalytics;

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
