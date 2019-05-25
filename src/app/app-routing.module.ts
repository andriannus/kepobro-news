import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { BusinessComponent } from '@app/business/business.component';
import { EntertainmentComponent } from '@app/entertainment/entertainment.component';
import { HealthComponent } from '@app/health/health.component';
import { LayoutComponent } from '@app/layout/layout.component';
import { HomeComponent } from '@app/home/home.component';
import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';
import { ReadComponent } from '@app/read/read.component';
import { ScienceComponent } from '@app/science/science.component';
import { SportsComponent } from '@app/sports/sports.component';
import { TechnologyComponent } from '@app/technology/technology.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [MetaGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'business',
        component: BusinessComponent
      },
      {
        path: 'entertainment',
        component: EntertainmentComponent
      },
      {
        path: 'health',
        component: HealthComponent
      },
      {
        path: 'science',
        component: ScienceComponent
      },
      {
        path: 'sports',
        component: SportsComponent
      },
      {
        path: 'technology',
        component: TechnologyComponent
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
