import { Component, OnInit } from '@angular/core';
import { Trip } from './trip';
import { Trips } from './mock-trips';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
