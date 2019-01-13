import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../entities/trip';
import { TripService } from "./trip.service";
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Logbook } from '../entities/logbook';
import { LogbookService } from '../logbook/logbook.service';
import { KeycloakService } from '../../keycloak.service';
import { isMaster } from 'cluster';



@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  ismanager: string;

  selectedTrip: Trip;
  trips: Trip[]; 
  logbooktrips: Trip[];
  faInfo = faInfo;
  logbookid: string;
  drivername: string;
  driverid: string;
  customername: string;

  tripheading: string;

  keineergebnisse: boolean = false;
  checkergebnisse(): void{
    if(this.trips == null){  
      this.keineergebnisse = true;
    }
    else{
      this.keineergebnisse = false;
    }
  }

  onSelect(trip: Trip): void{
    this.selectedTrip = trip;
  }

  

  getMyTrips(): void{
    this.trips = null;
    this.tripheading = "My Trips";
    this.tripService.getMyTrips(this.keycloakService.getUserMail())
        .subscribe(trips => this.trips = trips,
          () => (this.checkergebnisse()),
          () => (this.checkergebnisse())
          );
  }

  getLogbookTrips(): void{
    const id = this.route.snapshot.paramMap.get('id');
    //this.trips = this.tripService.getLogbookTrips(id);
    this.trips = null;
    this.tripheading = "Trips by Logobook "+id;
    this.tripService.getLogbookTrips(id)
        .subscribe(trips => this.trips = trips,
          () => (this.checkergebnisse()),
          () => (this.checkergebnisse())
          );
  }
  getLogbookTripsByID(): void{
    //this.trips = this.tripService.getLogbookTrips(this.logbookid);
    this.trips = null;
    this.tripheading = "Trips by Logbook "+this.logbookid;
    this.tripService.getLogbookTrips(this.logbookid)
        .subscribe(trips => this.trips = trips,
          () => (this.checkergebnisse()),
          () => (this.checkergebnisse())
          );
  }
  getTripsByDriverName(): void{
    this.trips = null;
    this.tripheading = "Trips by Driver "+this.drivername;
    this.trips = this.tripService.getTripsByDriverName(this.drivername);
  }
  getTrips(): void{
    //this.trips = this.tripService.getTrips();
    this.trips = null;
    this.tripheading = "All Trips";
    this.tripService.getTrips()
        .subscribe(trips => this.trips = trips,
          () => (this.checkergebnisse()),
          () => (this.checkergebnisse())
          );
  }
  getTripsByDriverID(): void{
    this.trips = null;
    this.tripheading = "Trips by Driver ID "+this.driverid;
    this.tripService.getTripsByDriverID(this.driverid)
        .subscribe(trips => this.trips = trips,
          () => (this.checkergebnisse()),
          () => (this.checkergebnisse())
          );
  }
  getTripsByCustomerName(): void{
    this.trips = null;
    this.tripheading = "Trips of Customer "+this.customername;
    this.tripService.getTripsByCustomerName(this.customername)
        .subscribe(trips => this.trips = trips,
          () => (this.checkergebnisse()),
          () => (this.checkergebnisse())
          );
  }

  

  showTrips(): void {
    // Prüfen ob über Logbook-Componente gekommen oder über Register "Fahrten"
    const id = +this.route.snapshot.paramMap.get('id');
    if( id != 0){ //ist über Logbook-Component hier
      this.getLogbookTrips();
    }
    else { //ist über Register "Fahrten" hier
      //this.getTrips();
    }
  }
  showTripByLogbookbyID(): void{
    this.getLogbookTripsByID();
  }
  showTripsByDriverName(): void{
    this.getTripsByDriverName();
  }
  showAllTrips(): void{
    this.getTrips();
  }
  showMyTrips():void{
    if(this.ismanager == "manager"){return;}
    this.getMyTrips();
  }
  showTripsByDriverID(): void{
    this.getTripsByDriverID();
  }
  showTripsByCustomerName(): void{
    this.getTripsByCustomerName();
  }

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute,
    private location: Location,
    private logbookService: LogbookService,
    private keycloakService: KeycloakService
    ) { }


  ngOnInit(): void {
    
    this.ismanager = this.keycloakService.getUserRole();
    this.showMyTrips();
  }

}
