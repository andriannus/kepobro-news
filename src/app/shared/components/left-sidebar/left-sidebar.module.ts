import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LeftSidebarComponent } from './left-sidebar.component';

@NgModule({
  declarations: [LeftSidebarComponent],
  imports: [RouterModule],
  providers: [],
  exports: [LeftSidebarComponent],
})

export class LeftSidebarModule {}
