import { Component, OnInit } from '@angular/core';
import { Logbook } from '../entities/logbook';
import { Car } from '../entities/car';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CreateLogbookService } from './create-logbook.service';

export const HOME_PATH = 'logbook';

@Component({
  selector: 'app-create-logbook',
  templateUrl: './create-logbook.component.html',
  styleUrls: ['./create-logbook.component.css']
})
export class CreateLogbookComponent implements OnInit {

  isPickDriver: boolean = false;
  newLogbook: Logbook = new Logbook;
  newCar: Car = new Car;

  setPickDriver():void{
    if(this.isPickDriver == false) {this.isPickDriver = true}
    else{ this.isPickDriver = false};
  }

  createLogbook():void{

    // Input-Felder
    const InputManufacturer = (<HTMLInputElement>document.getElementById("manufacturer"));
    const InputModel = (<HTMLInputElement>document.getElementById("model"));
    const InputLicenceplate= (<HTMLInputElement>document.getElementById("licenceplate"));
    const InputOdometer= (<HTMLInputElement>document.getElementById("odometer"));

    

    // Car
    this.newCar.manufacturer = InputManufacturer.value;
    this.newCar.model = InputModel.value;
    this.newCar.licenceplate = InputLicenceplate.value;
    this.newCar.odometer = InputOdometer.value;

    // Logbook
    this.newLogbook.car = this.newCar;


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
