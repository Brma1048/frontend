import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TripComponent } from './main/trip/trip.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TripDetailComponent } from './main/trip-detail/trip-detail.component'; // TUT
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogbookComponent } from './main/logbook/logbook.component';
import { FormsModule } from '@angular/forms';
import { CreateTripComponent } from './main/create-trip/create-trip.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CreateTripGuard } from './main/create-trip/create-trip.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    TripComponent,
    TripDetailComponent,
    LogbookComponent,
    CreateTripComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    // BsDatepickerModule.forRoot()
  ],
  providers: [CreateTripGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
