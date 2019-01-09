import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TripComponent } from './main/trip/trip.component';
import { TripDetailComponent } from './main/trip-detail/trip-detail.component';
import { LogbookComponent } from './main/logbook/logbook.component';
import { CreateTripComponent } from './main/create-trip/create-trip.component';
import { CreateTripGuard } from './main/create-trip/create-trip.guard';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { UctripsComponent } from './main/uctrips/uctrips.component';
import {UctripsDetailComponent} from './main/uctrips-detail/uctrips-detail.component';

const routes: Routes = [
  {path: "",redirectTo: "/dashboard", pathMatch: "full"},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'uctrips', component: UctripsComponent},
  { path: 'uctrips-detail/:id', component: UctripsDetailComponent},
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
