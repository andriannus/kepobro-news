import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseComponent } from '@app/pages/base/base.component';
import { routes } from '@app/pages/base/router';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BaseComponent,
        children: routes
      }
    ]),
  ],
  providers: [],
})

export class BaseModule {}
