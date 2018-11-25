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


  onSelect(trip: Trip): void{
    this.selectedTrip = trip;
  }

  trips: Trip[]; 
  logbooktrips: Trip[];
  faInfo = faInfo;
  test : string;

  getLogbookTrips(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.logbooktrips = this.tripService.getLogbookTrips(id.toString());
    alert(this.logbooktrips);
  }

  

  showTrips(): void {
    this.getLogbookTrips();
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
