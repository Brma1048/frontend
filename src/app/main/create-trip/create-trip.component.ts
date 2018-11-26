import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  
  constructor(
    private formBuilder: FormBuilder,
    private createService: CreateService) { }


  form: FormGroup;

  showConsole(): void {
    this.createService.geoCode();
  }
  
  ngOnInit() {

    this.form = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      startOdometer: new FormControl(),
      endOdometer: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      

    })

    /*this.form = this.formBuilder.group({
      //firstname: ['', [Validators.required, Validators.pattern(/^\w.*$/)]],
      //lastname: ['', [Validators.required, Validators.pattern(/^\w.*$/)]],
      startOdometer: ['', [Validators.required]],
      endOdometer: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      //private: ['', [Validators.required]],
      //business: ['', [Validators.required]],
      //startlocation: ['', [Validators.required]],
      //endlocation: ['', [Validators.required]]
         
  }) 
   */
 }

 onSubmit(): void {
   console.log(this.form)
 }

 onFormSubmit(){
    console.log(this.form.value)
}

}
