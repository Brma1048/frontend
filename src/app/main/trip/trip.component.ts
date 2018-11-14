import { Component, OnInit } from '@angular/core';
import { Trip } from '../entitys/trip';
import { TripService } from "./trip.service";
import { faInfo } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  selectedTrip: Trip;

  onSelect(trip: Trip): void{
    this.selectedTrip = trip;
  }

  trips: Trip[]; 
  faInfo = faInfo;

  getTrips(): void{
    this.tripService.getTrips()
        .subscribe(trips => this.trips = trips);
  }

  showTrips(): void {
    this.getTrips();
  }
  constructor(private tripService: TripService) { }

  ngOnInit() {
  }

}
