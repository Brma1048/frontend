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

  trip: Trip;


  getTrip(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.trip = this.tripService.getTrip(id.toString());
    alert(this.trip.id);
  }

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private logbookService: LogbookService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTrip();
  }

  

}
