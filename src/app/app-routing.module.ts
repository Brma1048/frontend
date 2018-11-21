import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TripComponent } from './main/trip/trip.component';
import { TripDetailComponent } from './main/trip-detail/trip-detail.component';
import { LogbookComponent } from './main/logbook/logbook.component';
import { CreateTripComponent } from './main/create-trip/create-trip.component';

const routes: Routes = [
  //{path: "",redirectTo: "/trip", pathMatch: "full"},
  { path: 'trip/:id',component: TripComponent },
  { path: 'detail/:id', component: TripDetailComponent},
  { path: 'logbook', component: LogbookComponent},
  { path: 'create', component: CreateTripComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
