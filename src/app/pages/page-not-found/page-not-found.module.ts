import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '@app/pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    RouterModule.forChild(
      [
        { path: '', component: PageNotFoundComponent }
      ]
    ),
  ],
  providers: [],
})

export class PageNotFoundModule {}
