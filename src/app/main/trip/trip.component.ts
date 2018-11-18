import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../entitys/trip';
import { TripService } from "./trip.service";
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Logbook } from '../entitys/logbook';
import { LogbookService } from '../logbook/logbook.service';



@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  selectedTrip: Trip;
//
@Input() logbook: Logbook;

  onSelect(trip: Trip): void{
    this.selectedTrip = trip;
  }

  trips: Trip[]; 
  logbooktrips: Trip[];
  faInfo = faInfo;

  getTrips(): void{
    this.tripService.getTrips()
        .subscribe(trips => this.trips = trips);
  }
  
  getLogbookTrips(): void{
    const id =+ this.route.snapshot.paramMap.get("id");
    this.tripService.getLogbookTrips(id)
      .subscribe(logbooktrips => this.logbooktrips = logbooktrips);
  }

  

  showTrips(): void {
    this.getTrips();
  }
  constructor(
    private tripService: TripService,
    private route: ActivatedRoute,
    private location: Location,
    private logbookService: LogbookService
    ) { }

    /*testfunktion(): void{
      this.alletrips = this.trips.filter(trips => trips.id === "1");
    }*/
  ngOnInit(): void {
    this.getLogbook();


    this.showTrips();
    
  }

  getLogbook(): void{
    const id =+ this.route.snapshot.paramMap.get("id");
    this.logbookService.getLogbook(id)
      .subscribe(logbook => this.logbook = logbook);
  }

  test(): void{
    alert(this.logbook.trips[1].id);
    /*this.nurtrips = this.trips.filter(
        trips => trips.id === this.logbook.id)
        alert(this.nurtrips[0]);*/
  }
}
