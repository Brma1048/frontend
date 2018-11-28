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
      logbookid: new FormControl(Validators.required),
      firstname: new FormControl(Validators.required),
      lastname: new FormControl(Validators.required),
      startOdometer: new FormControl(Validators.required),
      endOdometer: new FormControl(Validators.required),
      startDate: new FormControl(Validators.required),
      endDate: new FormControl(Validators.required),
      customername: new FormControl(Validators.required),
      projectname: new FormControl(Validators.required),
      art: new FormControl(),
      driverid: new FormControl(Validators.required)
      

    })
  }

  add(): void {
    const newTrip = this.form.value;
  
    this.createService.addTrip(newTrip);

   
  }


 
}
