import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../entitys/trip';
import { TripService } from "./trip.service";
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Logbock } from '../entitys/logbock';
import { LogbockService } from '../logbock/logbock.service';



@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  selectedTrip: Trip;
//
@Input() logbock: Logbock;

  onSelect(trip: Trip): void{
    this.selectedTrip = trip;
  }

  trips: Trip[]; 
  logbocktrips: Trip[];
  faInfo = faInfo;

  getTrips(): void{
    this.tripService.getTrips()
        .subscribe(trips => this.trips = trips);
  }
  
  getLogbockTrips(): void{
    const id =+ this.route.snapshot.paramMap.get("id");
    this.tripService.getLogbockTrips(id)
      .subscribe(logbocktrips => this.logbocktrips = logbocktrips);
  }

  

  showTrips(): void {
    this.getTrips();
  }
  constructor(
    private tripService: TripService,
    private route: ActivatedRoute,
    private location: Location,
    private logbockService: LogbockService
    ) { }

    /*testfunktion(): void{
      this.alletrips = this.trips.filter(trips => trips.id === "1");
    }*/
  ngOnInit(): void {
    this.getLogbock();


    this.showTrips();
    
  }

  getLogbock(): void{
    const id =+ this.route.snapshot.paramMap.get("id");
    this.logbockService.getLogbock(id)
      .subscribe(logbock => this.logbock = logbock);
  }

  test(): void{
    alert(this.logbock.trips[1].id);
    /*this.nurtrips = this.trips.filter(
        trips => trips.id === this.logbock.id)
        alert(this.nurtrips[0]);*/
  }
}
