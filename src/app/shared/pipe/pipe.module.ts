import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlePipe } from '@app/shared/pipe/format/article.pipe';
import { DatePipe } from '@app/shared/pipe/format/date.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [
    ArticlePipe,
    DatePipe
  ],
  declarations: [
    ArticlePipe,
    DatePipe
  ],
})

export class PipeModule {}
