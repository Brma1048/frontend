import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Trip } from '../entities/trip';
import { Location } from '@angular/common';


@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  constructor(
    public _location: Location,
    private createService: CreateService) { }

  showWarning: false;
  form: FormGroup;
  location: string;

  showConsole(): void {
    this.createService.geoCode(this.location);
  }

  ngOnInit() {

    this.form = new FormGroup({
      logbook: new FormGroup({
        id: new FormControl('', Validators.required)
      }),
      startWaypoint: new FormGroup({
        gpsLat: new FormControl('', Validators.required),
        gpsLon: new FormControl('', Validators.required)
      }),
      endWaypoint: new FormGroup({
        gpsLat: new FormControl('', Validators.required),
        gpsLon: new FormControl('', Validators.required),
        endDate: new FormControl('', Validators.required)
      }),
      isBusiness: new FormControl('', Validators.required),
      startOdometer: new FormControl('', Validators.required),
      endOdometer: new FormControl('', Validators.required),
      customerName: new FormControl('', Validators.required),
      projectName: new FormControl('', Validators.required),
      // driverid: new FormControl()
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
    });
  }

  add(): void {
    const newTrip = this.form.value;
    this.createService.addTrip(newTrip);
  }

  goBack() {
    this._location.back();
    this.showWarning = false;
  }
}
