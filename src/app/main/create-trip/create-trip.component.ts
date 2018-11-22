import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  constructor() { }

  todayDate = Date.now();

  ngOnInit() {
    this.todayDate = Date.now();
  }

}
