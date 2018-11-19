import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TripComponent } from './main/trip/trip.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { TripDetailComponent } from './main/trip-detail/trip-detail.component'; //TUT
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogbookComponent } from './main/logbook/logbook.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    TripComponent,
    TripDetailComponent,
    LogbookComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Hallo