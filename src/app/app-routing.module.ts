import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [MetaGuard],
    loadChildren: () => import('@app/pages/base/base.module').then(m => m.BaseModule)
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
