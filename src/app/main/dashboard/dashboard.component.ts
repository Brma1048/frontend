import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip/trip.service';
import { Trip } from '../entities/trip';
import { KeycloakService } from '../../keycloak.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  unconfirmedTrips: Trip[];
  informUser(): void{
    if(this.unconfirmedTrips != null){
      alert("You have unconfirmed trips!");
    }
  }

  constructor(
    private tripService: TripService,
    private keycloakService: KeycloakService
  ) { }

  ngOnInit() {

  }

}
