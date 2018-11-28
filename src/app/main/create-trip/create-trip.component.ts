import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms'
import { Trip } from '../entities/trip';


@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  
  constructor(
    
    private createService: CreateService) { }


  form: FormGroup;
  location: string;

  showConsole(): void {
    this.createService.geoCode(this.location);
  }
  
  ngOnInit() {

    this.form = new FormGroup({
      logbookid: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      startOdometer: new FormControl(),
      endOdometer: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      customername: new FormControl(),
      projectname: new FormControl(),
      art: new FormControl(),
      driverid: new FormControl(),
      lat: new FormControl(),
      lon: new FormControl()
      

    })
  }

  add(): void {
    const newTrip = this.form.value;
  
    this.createService.addTrip(newTrip);

   
  }


 
}
