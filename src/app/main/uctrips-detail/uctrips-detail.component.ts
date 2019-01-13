import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators, NgForm } from '@angular/forms';
import { Trip } from '../entities/trip';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../trip/trip.service';
import { CreateService } from '../create-trip/create.service';


@Component({
  selector: 'app-uctrips-detail',
  templateUrl: './uctrips-detail.component.html',
  styleUrls: ['./uctrips-detail.component.css']
})
export class UctripsDetailComponent implements OnInit {


  myunconfirmedTrip: Trip;

  isBusinessTrip: boolean = false;

  changeFormInputs(): void{

  }

  putTrip(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    if(this.isBusinessTrip == true){
      this.myunconfirmedTrip.isBusiness = true;
      const InputCustomer = (<HTMLInputElement>document.getElementById("inputCustomerName"));
      const InputProject  = (<HTMLInputElement>document.getElementById("inputProjectName")); 
      if(InputCustomer.value == "" || InputProject.value == ""){
        return alert("Fehler");
      }
      this.myunconfirmedTrip.projectName = InputProject.value;
      this.myunconfirmedTrip.customerName = InputCustomer.value;
    }
    this.myunconfirmedTrip.isBusiness = this.isBusinessTrip;
    this.createService.updateTrip(this.myunconfirmedTrip,id.toString());

  }

  getMyUnconfirmedTrip(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    //this.tripService.getTrip(id)
    this.tripService.getMyTripById(id)
    .subscribe(myunconfirmedTrip => this.myunconfirmedTrip = myunconfirmedTrip,
    () => alert("error"),
    () => this.changeFormInputs());

  }

  setBusinessTrip():void{
    switch(this.isBusinessTrip){
      case true:
        this.isBusinessTrip = false;
        break;
      case false:
        this.isBusinessTrip = true;
        
    }
  }
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tripService: TripService,
    private createService: CreateService
  ) { }

  ngOnInit() {
    this.getMyUnconfirmedTrip();
  }

}
