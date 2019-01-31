import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../entities/trip';
import { TripService } from "./trip.service";
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Logbook } from '../entities/logbook';
import { LogbookService } from '../logbook/logbook.service';
import { KeycloakService } from '../../keycloak.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  // Meta
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

  noresults: boolean = false;
  checkResults(): void{
    if(this.trips == null){  
      this.noresults = true;
    }
    else{
      this.noresults = false;
    }
  }

  onSelect(trip: Trip): void{
    this.selectedTrip = trip;
  }

  // get my trips [Employee]
  getMyTrips(): void{
    this.trips = null;
    this.tripheading = "My Trips";
    this.tripService.getMyTrips(this.keycloakService.getUserMail())
        .subscribe(trips => this.trips = trips,
          () => (this.checkResults()),
          () => (this.checkResults())
          );
  }

  // get all trips of a logbook [Manager/Empoyee]
  getLogbookTrips(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.trips = null;
    this.tripheading = "Trips by Logobook "+id;
    this.tripService.getLogbookTrips(id)
        .subscribe(trips => this.trips = trips,
          () => (this.checkResults()),
          () => (this.checkResults())
          );
  }

  // get all trips by a logbook id [Manager]
  getLogbookTripsByID(): void{
    this.trips = null;
    this.tripheading = "Trips by Logbook "+this.logbookid;
    this.tripService.getLogbookTrips(this.logbookid)
        .subscribe(trips => this.trips = trips,
          () => (this.checkResults()),
          () => (this.checkResults())
          );
  }

  // get trips by driver name [Manager]
  getTripsByDriverName(): void{
    this.trips = null;
    this.tripheading = "Trips by Driver "+this.drivername;
    this.trips = this.tripService.getTripsByDriverName(this.drivername);
  }

  // get all trips [Manager]
  getTrips(): void{
    this.trips = null;
    this.tripheading = "All Trips";
    this.tripService.getTrips()
        .subscribe(trips => this.trips = trips,
          () => (this.checkResults()),
          () => (this.checkResults())
          );
  }

  // get trips by driver id [Manager]
  getTripsByDriverID(): void{
    this.trips = null;
    this.tripheading = "Trips by Driver ID "+this.driverid;
    this.tripService.getTripsByDriverID(this.driverid)
        .subscribe(trips => this.trips = trips,
          () => (this.checkResults()),
          () => (this.checkResults())
          );
  }

  // get trips by customer name [Manager]
  getTripsByCustomerName(): void{
    this.trips = null;
    this.tripheading = "Trips of Customer "+this.customername;
    this.tripService.getTripsByCustomerName(this.customername)
        .subscribe(trips => this.trips = trips,
          () => (this.checkResults()),
          () => (this.checkResults())
          );
  }

  // Show-Functions
  showTrips(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if( id != 0){
      this.getLogbookTrips();
    }
    else {
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
