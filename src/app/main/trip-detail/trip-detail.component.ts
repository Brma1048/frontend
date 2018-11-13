import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TripService } from '../trip/trip.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  constructor(
    /*
    private route: ActivatedRoute,
    private tripService: TripService,
    
    */
   private location: Location
  ) { }

  ngOnInit(): void {
   // this.getTrip();
  }

  goBack(): void{
    this.location.back();
  }
  /*
  getTrip(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tripService.getTrip(id)
        .subscribe(trip => this.trip = trip);
  }
  */
}
