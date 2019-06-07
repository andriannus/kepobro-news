import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePipe } from '@app/shared/pipe/format/date.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [DatePipe],
  declarations: [DatePipe],
})

export class PipeModule {}
