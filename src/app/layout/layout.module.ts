import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from '@app/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            loadChildren: '@app/news/news.module#NewsModule',
            data: {
              category: 0
            }
          },
          {
            path: 'business',
            loadChildren: '@app/news/news.module#NewsModule',
            data: {
              category: 1
            }
          },
          {
            path: 'entertainment',
            loadChildren: '@app/news/news.module#NewsModule',
            data: {
              category: 2
            }
          },
          {
            path: 'health',
            loadChildren: '@app/news/news.module#NewsModule',
            data: {
              category: 3
            }
          },
          {
            path: 'science',
            loadChildren: '@app/news/news.module#NewsModule',
            data: {
              category: 4
            }
          },
          {
            path: 'sports',
            loadChildren: '@app/news/news.module#NewsModule',
            data: {
              category: 5
            }
          },
          {
            path: 'technology',
            loadChildren: '@app/news/news.module#NewsModule',
            data: {
              category: 6
            }
          },
          {
            path: 'read',
            loadChildren: '@app/read/read.module#ReadModule'
          },
          {
            path: '**',
            loadChildren: '@app/page-not-found/page-not-found.module#PageNotFoundModule'
          }
        ]
      }
    ]),
  ],
  providers: [],
})

export class LayoutModule {}
