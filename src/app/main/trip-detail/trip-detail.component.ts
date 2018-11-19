import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Trip } from "../entities/trip";
import { TripService } from '../trip/trip.service';
import { LogbookService } from "../logbook/logbook.service";
import { Logbook } from '../entities/logbook';


@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  //@Input() trip: Trip;
  @Input() logbook: Logbook;
  tripid : string;
  relevantertrip : Trip;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private logbookService: LogbookService,
    private location: Location
  ) { }

  ngOnInit(): void {
   //this.getTrip();
   this.getLogbook();
   this.route.queryParams.subscribe(params =>{
     this.tripid = params["tripid"];
   })
  }

  /*getTrip(): void{
    const id =+ this.route.snapshot.paramMap.get("id");
    this.tripService.getTrip(id)
      .subscribe(trip => this.trip = trip);
  }*/
  getLogbook(): void{
    const id =+ this.route.snapshot.paramMap.get("id");
    this.logbookService.getLogbook(id)
        .subscribe(logbook => this.logbook = logbook)
  }

  goBack(): void{
    this.location.back();
  }

  test(): void{
    alert(this.logbook.id);
  }
}
