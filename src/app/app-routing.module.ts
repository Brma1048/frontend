import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TripComponent } from './main/trip/trip.component';
import { TripDetailComponent } from './main/trip-detail/trip-detail.component';

const routes: Routes = [
  //{path: "",redirectTo: "/trip", pathMatch: "full"},
  { path: 'trip', component: TripComponent },
  { path: 'detail/:id', component: TripDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
