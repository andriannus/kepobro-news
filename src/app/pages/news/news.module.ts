import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewsComponent } from '@app/pages/news/news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NewsComponent }]),
  ],
  providers: [],
})

export class NewsModule {}
