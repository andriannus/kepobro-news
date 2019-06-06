import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NewsComponent } from '@app/news/news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NewsComponent }]),
  ],
  providers: [],
})

export class NewsModule {}
