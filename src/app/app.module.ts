import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MetaModule } from '@ngx-meta/core';

import { AppRoutingModule } from '@app/app-routing.module';
import { LeftSidebarModule } from '@app/shared/components/left-sidebar/left-sidebar.module';
import { NavbarModule } from '@app/shared/components/navbar/navbar.module';
import { RightSidebarModule } from '@app/shared/components/right-sidebar/right-sidebar.module';

import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    MetaModule.forRoot(),
    LeftSidebarModule,
    NavbarModule,
    RightSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
