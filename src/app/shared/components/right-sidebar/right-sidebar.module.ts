import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RightSidebarComponent } from './right-sidebar.component';

@NgModule({
  declarations: [RightSidebarComponent],
  imports: [RouterModule],
  providers: [],
  exports: [RightSidebarComponent],
})

export class RightSidebarModule {}
