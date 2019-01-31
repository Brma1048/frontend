import { Component, OnInit } from '@angular/core';
import { Logbook } from '../entities/logbook';
import { Car } from '../entities/car';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CreateLogbookService } from './create-logbook.service';

// Redirect-Path
export const HOME_PATH = 'logbook';

@Component({
  selector: 'app-create-logbook',
  templateUrl: './create-logbook.component.html',
  styleUrls: ['./create-logbook.component.css']
})
export class CreateLogbookComponent implements OnInit {

  newLogbook: Logbook = new Logbook;
  newCar: Car = new Car;


  createLogbook():void{

    // Input-Felder
    const InputBlackBoxID = (<HTMLInputElement>document.getElementById("blackboxid"));
    const InputManufacturer = (<HTMLInputElement>document.getElementById("manufacturer"));
    const InputModel = (<HTMLInputElement>document.getElementById("model"));
    const InputLicenceplate= (<HTMLInputElement>document.getElementById("licenceplate"));
    const InputOdometer= (<HTMLInputElement>document.getElementById("odometer"));

    // Car
    this.newCar.manufacturer = InputManufacturer.value;
    this.newCar.model = InputModel.value;
    this.newCar.lincensPlate = InputLicenceplate.value;
    this.newCar.odometer = InputOdometer.value;

    // Logbook
    this.newLogbook.id = InputBlackBoxID.value;
    this.newLogbook.car = this.newCar;

    //Validation
    if(InputBlackBoxID.value == ""||InputLicenceplate.value ==""||InputManufacturer.value ==""||InputModel.value ==""||InputOdometer.value ==""){
      return alert("There are fields with no data!");
    }
    if(parseInt(InputOdometer.value) < 0){
      return alert ("The value of Odometer is not correct!");
    }

    console.log(this.newLogbook);
    this.createLobookService.createLogbook(this.newLogbook);


   }
  constructor(
    private createLobookService: CreateLogbookService,
    private router: Router,
    public _location: Location,) { }

  ngOnInit() {
  }

}
