import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators, NgForm } from '@angular/forms';
import { Trip } from '../entities/trip';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-uctrips-detail',
  templateUrl: './uctrips-detail.component.html',
  styleUrls: ['./uctrips-detail.component.css']
})
export class UctripsDetailComponent implements OnInit {


  isBusinessTrip: boolean = false;

  setBusinessTrip():void{
    switch(this.isBusinessTrip){
      case true:
        this.isBusinessTrip = false;
        break;
      case false:
        this.isBusinessTrip = true;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
