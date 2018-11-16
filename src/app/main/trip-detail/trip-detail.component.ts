import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Trip } from "../entitys/trip";
import { TripService } from '../trip/trip.service';
import { LogbockService } from "../logbock/logbock.service";
import { Logbock } from '../entitys/logbock';


@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  //@Input() trip: Trip;
  @Input() logbock: Logbock;
  tripid : string;
  relevantertrip : Trip;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private logbockService: LogbockService,
    private location: Location
  ) { }

  ngOnInit(): void {
   //this.getTrip();
   this.getLogbock();
   this.route.queryParams.subscribe(params =>{
     this.tripid = params["tripid"];
   })
  }

  /*getTrip(): void{
    const id =+ this.route.snapshot.paramMap.get("id");
    this.tripService.getTrip(id)
      .subscribe(trip => this.trip = trip);
  }*/
  getLogbock(): void{
    const id =+ this.route.snapshot.paramMap.get("id");
    this.logbockService.getLogbock(id)
        .subscribe(logbock => this.logbock = logbock)
  }

  goBack(): void{
    this.location.back();
  }

  test(): void{
    alert(this.logbock.id);
  }
}
