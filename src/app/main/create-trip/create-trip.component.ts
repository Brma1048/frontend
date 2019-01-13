import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateService } from './create.service';
import { FormControl, FormGroup, Validator, Validators, NgForm } from '@angular/forms';
import { Trip } from '../entities/trip';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import * as $ from 'jquery';

export const HOME_PATH = 'logbook';
@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  @ViewChild('tripForm') public createTripForm: NgForm;

  constructor(
    private router: Router,
    public _location: Location,
    private createService: CreateService) { }

  showWarning = false;
  fertig = false;
  form: FormGroup;
  locationstart: string;
  locationend: string;

  addGeoCodeStart(): void {
    this.createService.getGeoCodeStart(this.locationstart);
  }

  addGeoCodeEnd(): void {
    this.createService.getGeoCodeEnd(this.locationend);
  }

  ngOnInit() {

    this.form = new FormGroup({
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

  add(): void {
    const newTrip = this.form.value;
    this.createService.addTrip(newTrip);
    this.router.navigate([HOME_PATH]);
    this.showWarning = false;
    this.fertig = true;
  }

  goBack() {
    this._location.back();
    this.showWarning = false;
  }
}
