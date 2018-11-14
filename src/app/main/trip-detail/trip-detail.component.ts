import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Trip } from "../entitys/trip";
import { TripService } from '../trip/trip.service';


@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  @Input() trip: Trip;
  constructor(
    
   private location: Location
  ) { }

  ngOnInit(): void {
   
  }

  goBack(): void{
    this.location.back();
  }
}
