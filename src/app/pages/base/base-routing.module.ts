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
            loadChildren: () => import('@app/pages/news/news.module').then(m => m.NewsModule),
            data: {
              category: 0
            }
          },
          {
            path: 'business',
            loadChildren: () => import('@app/pages/news/news.module').then(m => m.NewsModule),
            data: {
              category: 1
            }
          },
          {
            path: 'entertainment',
            loadChildren: () => import('@app/pages/news/news.module').then(m => m.NewsModule),
            data: {
              category: 2
            }
          },
          {
            path: 'health',
            loadChildren: () => import('@app/pages/news/news.module').then(m => m.NewsModule),
            data: {
              category: 3
            }
          },
          {
            path: 'science',
            loadChildren: () => import('@app/pages/news/news.module').then(m => m.NewsModule),
            data: {
              category: 4
            }
          },
          {
            path: 'sports',
            loadChildren: () => import('@app/pages/news/news.module').then(m => m.NewsModule),
            data: {
              category: 5
            }
          },
          {
            path: 'technology',
            loadChildren: () => import('@app/pages/news/news.module').then(m => m.NewsModule),
            data: {
              category: 6
            }
          },
          {
            path: 'read',
            loadChildren: () => import('@app/pages/read/read.module').then(m => m.ReadModule)
          },
          {
            path: '**',
            loadChildren: () => import('@app/pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
          }
        ]
      }
    ]),
  ],
  exports: [RouterModule]
})

export class BaseRoutingModule { }
