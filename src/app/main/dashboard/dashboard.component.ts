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

  uctrips: Trip[];

  ismanager: string;

  userindata: boolean;

  informUser(): void{
    if(this.uctrips != null){
      alert("You have unconfirmed trips!");
    }
  }

  getMyUnconfirmedTrips(): void{
    if(this.ismanager == "manager") {return;}
    this.uctrips = null;
    this.tripService.getMyUnconfirmedTrips(this.keycloakService.getUserMail())
        .subscribe(trips => this.uctrips = trips,
          () => (console.log("no unconfirmed trips")),
          () => (this.informUser())
          );
  }

  constructor(
    private tripService: TripService,
    private keycloakService: KeycloakService
  ) { }

  ngOnInit() {
    this.ismanager = this.keycloakService.getUserRole();
    this.getMyUnconfirmedTrips(); 
    this.userindata = this.keycloakService.userindata;
  }

}//
