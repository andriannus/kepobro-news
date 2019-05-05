import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    EntertainmentComponent,
    HealthComponent,
    HomeComponent,
    LayoutComponent,
    LeftSidebarComponent,
    NavbarComponent,
    PageNotFoundComponent,
    RightSidebarComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
