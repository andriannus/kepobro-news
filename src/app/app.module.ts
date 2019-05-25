import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MetaModule } from '@ngx-meta/core';

import { AppRoutingModule } from '@app/app-routing.module';
import { LeftSidebarModule } from '@app/shared/components/left-sidebar/left-sidebar.module';
import { NavbarModule } from '@app/shared/components/navbar/navbar.module';
import { RightSidebarModule } from '@app/shared/components/right-sidebar/right-sidebar.module';

import { AppComponent } from '@app/app.component';
import { BusinessComponent } from '@app/business/business.component';
import { EntertainmentComponent } from '@app/entertainment/entertainment.component';
import { HealthComponent } from '@app/health/health.component';
import { HomeComponent } from '@app/home/home.component';
import { LayoutComponent } from '@app/layout/layout.component';
import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';
import { ReadComponent } from '@app/read/read.component';
import { ScienceComponent } from '@app/science/science.component';
import { SportsComponent } from '@app/sports/sports.component';
import { TechnologyComponent } from '@app/technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    EntertainmentComponent,
    HealthComponent,
    HomeComponent,
    LayoutComponent,
    PageNotFoundComponent,
    ReadComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent
  ],
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
