import { Component, OnInit } from '@angular/core';
import { Trip } from './trip';
import { Trips } from './mock-trips';
import { TripService } from "./trip.service";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trips: Trip[];

  getTrips(): void{
    this.tripService.getTrips()
        .subscribe(trips => this.trips = trips);
  }

  showTrips(): void {
    this.getTrips();
  }
  constructor(private tripService: TripService) { }

  ngOnInit() {
    //this.getTrips();
  }

}
