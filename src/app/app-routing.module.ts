import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReadComponent } from './read/read.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

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
