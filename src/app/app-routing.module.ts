import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [MetaGuard],
    loadChildren: '@app/pages/base/base.module#BaseModule'
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
