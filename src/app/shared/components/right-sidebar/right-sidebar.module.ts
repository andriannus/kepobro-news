import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RightSidebarComponent } from './right-sidebar.component';

@NgModule({
  declarations: [RightSidebarComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [RightSidebarComponent],
})

export class RightSidebarModule {}
