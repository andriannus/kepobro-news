import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { LayoutComponent } from '@app/layout/layout.component';
import { NewsComponent } from '@app/news/news.component';
import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';
import { ReadComponent } from '@app/read/read.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [MetaGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: NewsComponent,
        data: {
          category: 0
        }
      },
      {
        path: 'business',
        component: NewsComponent,
        data: {
          category: 1
        }
      },
      {
        path: 'entertainment',
        component: NewsComponent,
        data: {
          category: 2
        }
      },
      {
        path: 'health',
        component: NewsComponent,
        data: {
          category: 3
        }
      },
      {
        path: 'science',
        component: NewsComponent,
        data: {
          category: 4
        }
      },
      {
        path: 'sports',
        component: NewsComponent,
        data: {
          category: 5
        }
      },
      {
        path: 'technology',
        component: NewsComponent,
        data: {
          category: 6
        }
      },
      {
        path: 'read',
        component: ReadComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { scrollPositionRestoration: 'enabled' }
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
