import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TripComponent } from './main/trip/trip.component';
import { TripDetailComponent } from './main/trip-detail/trip-detail.component';
import { LogbookComponent } from './main/logbook/logbook.component';
import { CreateTripComponent } from './main/create-trip/create-trip.component';
import { CreateTripGuard } from './main/create-trip/create-trip.guard';

const routes: Routes = [
  // {path: "",redirectTo: "/trip", pathMatch: "full"},
  { path: 'trip', component: TripComponent },
  { path: 'trip/:id', component: TripComponent },
  { path: 'trip-detail/:id', component: TripDetailComponent },
  { path: 'logbook', component: LogbookComponent},
  { path: 'create', component: CreateTripComponent, canDeactivate: [CreateTripGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
