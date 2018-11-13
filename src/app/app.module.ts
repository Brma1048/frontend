import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TripComponent } from './main/trip/trip.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; //TUT
import { InMemoryDataService }  from './in-memory-data.service';
import { TripDetailComponent } from './main/trip-detail/trip-detail.component'; //TUT
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    TripComponent,
    TripDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( //TUT
      InMemoryDataService, { dataEncapsulation: false } //TUT
    ), //TUT
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Hallo