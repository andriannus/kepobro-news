import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PipeModule } from '@app/shared/pipe/pipe.module';

import { ReadComponent } from '@app/pages/read/read.component';

@NgModule({
  declarations: [ReadComponent],
  imports: [
    CommonModule,
    PipeModule,
    RouterModule.forChild([{ path: '', component: ReadComponent }]),
  ],
  providers: [],
})

export class ReadModule {}
