import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";

// import { AppComponent } from "./app.component";

import { NgxUiLoaderModule } from "ngx-ui-loader";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './components/topheadline/topheadline.component';
import {HttpClientModule} from '@angular/common/http';
import { RestService } from './services/rest.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { BusinessComponent } from './components/business/business.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { HealthComponent } from './components/health/health.component';
import { ScienceComponent } from './components/science/science.component';
import { SportComponent } from './components/sport/sport.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    NavbarComponent,
    FooterComponent,
    TechnologyComponent,
    BusinessComponent,
    EntertainmentComponent,
    HealthComponent,
    ScienceComponent,
    SportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // BrowserModule,
    // Import NgxUiLoaderModule
    NgxUiLoaderModule,
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
