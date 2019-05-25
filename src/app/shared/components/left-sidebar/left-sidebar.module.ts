import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LeftSidebarComponent } from './left-sidebar.component';

@NgModule({
  declarations: [LeftSidebarComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [LeftSidebarComponent],
})
export class LeftSidebarModule {}
