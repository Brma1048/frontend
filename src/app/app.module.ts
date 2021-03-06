import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

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
import { KeycloakService } from './keycloak.service';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { UctripsComponent } from './main/uctrips/uctrips.component';
import { UctripsDetailComponent } from './main/uctrips-detail/uctrips-detail.component';
import { CreateLogbookComponent } from './main/create-logbook/create-logbook.component';
import { CreateUserComponent } from './main/create-user/create-user.component';
import { UpdateLogbookComponent } from './main/update-logbook/update-logbook.component';

export function kcFactory(keycloakService: KeycloakService) {
  return () => keycloakService.init();
}
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
    DashboardComponent,
    UctripsComponent,
    UctripsDetailComponent,
    CreateLogbookComponent,
    CreateUserComponent,
    UpdateLogbookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: kcFactory,
      multi: true,
      deps: [KeycloakService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
