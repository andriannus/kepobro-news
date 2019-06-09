import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseComponent } from '@app/pages/base/base.component';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BaseComponent,
        children: [
          {
            path: '',
            loadChildren: '@app/pages/news/news.module#NewsModule',
            data: {
              category: 0
            }
          },
          {
            path: 'business',
            loadChildren: '@app/pages/news/news.module#NewsModule',
            data: {
              category: 1
            }
          },
          {
            path: 'entertainment',
            loadChildren: '@app/pages/news/news.module#NewsModule',
            data: {
              category: 2
            }
          },
          {
            path: 'health',
            loadChildren: '@app/pages/news/news.module#NewsModule',
            data: {
              category: 3
            }
          },
          {
            path: 'science',
            loadChildren: '@app/pages/news/news.module#NewsModule',
            data: {
              category: 4
            }
          },
          {
            path: 'sports',
            loadChildren: '@app/pages/news/news.module#NewsModule',
            data: {
              category: 5
            }
          },
          {
            path: 'technology',
            loadChildren: '@app/pages/news/news.module#NewsModule',
            data: {
              category: 6
            }
          },
          {
            path: 'read',
            loadChildren: '@app/pages/read/read.module#ReadModule'
          },
          {
            path: '**',
            loadChildren: '@app/pages/page-not-found/page-not-found.module#PageNotFoundModule'
          }
        ]
      }
    ]),
  ],
  exports: [RouterModule]
})

export class BaseRoutingModule { }
