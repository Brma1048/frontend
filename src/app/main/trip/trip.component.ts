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
  logbookid: string;
  drivername: string;

  onSelect(trip: Trip): void{
    this.selectedTrip = trip;
  }

  

  getLogbookTrips(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.trips = this.tripService.getLogbookTrips(id.toString());//
  }
  getLogbookTripsByID(): void{
    this.trips = this.tripService.getLogbookTrips(this.logbookid);
  }
  getTripsByDriverName(): void{
    this.trips = this.tripService.getTripByDriverName(this.drivername);
  }
  getTrips(): void{
    this.trips = this.tripService.getTrips();
  }

  

  showTrips(): void {
    // Prüfen ob über Logbook-Componente gekommen oder über Register "Fahrten"
    const id = +this.route.snapshot.paramMap.get('id');
    if( id != 0){ //ist über Logbook-Component hier
      this.getLogbookTrips();
    }
    else { //ist über Register "Fahrten" hier
      this.getTrips();
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
