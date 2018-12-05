import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Trip } from '../entities/trip';
import { Location } from '@angular/common';
import * as $ from 'jquery';


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
        id: new FormControl('', [Validators.required])
      }),
      startWaypoint: new FormGroup({
        gpsLat: new FormControl('', [Validators.required, Validators.min(0)]),
        gpsLon: new FormControl('', [Validators.required, Validators.min(0)])
      }),
      endWaypoint: new FormGroup({
        gpsLat: new FormControl('', [Validators.required, Validators.min(0)]),
        gpsLon: new FormControl('', [Validators.required, Validators.min(0)]),
      }),
      isBusiness: new FormControl('', Validators.required),
      startOdometer: new FormControl('', [Validators.required, Validators.min(0), Validators.max(400000)]),
      endOdometer: new FormControl('', [Validators.required, Validators.min(1), Validators.max(400000)]),
      customerName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      projectName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
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
  /*
  $(function () {
    $('#datetimepicker6').datetimepicker();
    $('#datetimepicker7').datetimepicker({
        useCurrent: false // Important! See issue #1075
    });
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });
}); */
}
