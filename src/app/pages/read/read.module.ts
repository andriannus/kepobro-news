import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReadComponent } from '@app/pages/read/read.component';

@NgModule({
  declarations: [ReadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ReadComponent }]),
  ],
  providers: [],
})

export class ReadModule {}
