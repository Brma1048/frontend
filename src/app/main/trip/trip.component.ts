import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../entities/trip';
import { TripService } from "./trip.service";
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Logbook } from '../entities/logbook';
import { LogbookService } from '../logbook/logbook.service';



@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  selectedTrip: Trip;
  trips: Trip[]; 
  logbooktrips: Trip[];
  faInfo = faInfo;
  logbookid: number;
  drivername: string;
  driverid: number;
  customername: string;

  onSelect(trip: Trip): void{
    this.selectedTrip = trip;
  }

  

  getLogbookTrips(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    //this.trips = this.tripService.getLogbookTrips(id);
    this.tripService.getLogbookTrips(id)
        .subscribe(trips => this.trips = trips);
  }
  getLogbookTripsByID(): void{
    //this.trips = this.tripService.getLogbookTrips(this.logbookid);
    this.tripService.getLogbookTrips(this.logbookid)
        .subscribe(trips => this.trips = trips);
  }
  getTripsByDriverName(): void{
    this.trips = this.tripService.getTripsByDriverName(this.drivername);
  }
  getTrips(): void{
    //this.trips = this.tripService.getTrips();
    this.tripService.getTrips()
        .subscribe(trips => this.trips = trips);
  }
  getTripsByDriverID(): void{
    this.tripService.getTripsByDriverID(this.driverid)
        .subscribe(trips => this.trips = trips);
  }
  getTripsByCustomerName(): void{
    this.tripService.getTripsByCustomerName(this.customername)
        .subscribe(trips => this.trips = trips);
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
    private logbookService: LogbookService
    ) { }


  ngOnInit(): void {
    this.showTrips();
  }

}
