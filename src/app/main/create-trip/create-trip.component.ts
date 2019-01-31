import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { NewTrip } from '../entities/newTrip';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { WayPoints } from '../entities/waypoints';


export const HOME_PATH = 'logbook';
@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  constructor(private createTripService: CreateService,
    private router: Router,
    public _location: Location, ){}

  // Var declaration 
  startlat: number;
  startlon: number;
  endlat: number;
  endlon: number;
  newTrip: NewTrip = new NewTrip;
  newWaypointStart: WayPoints = new WayPoints;
  newWaypointEnd: WayPoints = new WayPoints;
  isBusinessTrip: boolean = false;
  locationstart: string;
  locationend: string;


  // Get start Geodates
  addGeoCodeStart(){
    this.createTripService.getGeoCodeStart(this.locationstart).subscribe((response) => { this.startlat = response[0].lat; this.startlon = response[0].lon; }
    );
  }

  // Get end Geodates
  addGeoCodeEnd(){
    this.createTripService.getGeoCodeEnd(this.locationend).subscribe((response) => { this.endlat = response[0].lat; this.endlon = response[0].lon }
    );
  }

  // Set Business trip to true or false
  setBusinessTrip():void{
    switch(this.isBusinessTrip){
      case true:
        this.isBusinessTrip = false;
        break;
      case false:
        this.isBusinessTrip = true;

    }
  }



  createTrip():void {

  //Input
  const startOdometerInput =  (<HTMLInputElement>document.getElementById("startOdometer"));
  const endOdometerInput =  (<HTMLInputElement>document.getElementById("endOdometer"));
  const customerNameInput =  (<HTMLInputElement>document.getElementById("customerName") as HTMLInputElement);
  const projectNameInput =  (<HTMLInputElement>document.getElementById("projectName") as HTMLInputElement);
  const startDateInput =  (<HTMLInputElement>document.getElementById("startDate"));
  const endDateInput =  (<HTMLInputElement>document.getElementById("endDate"));


  // Validation
  if(startOdometerInput.value == "" || parseInt(startOdometerInput.value) < 0 ){
    return alert("Startodometer is empty or smaller than 0!");
  }
  if(endOdometerInput.value == "" || parseInt(endOdometerInput.value) <  parseInt(startOdometerInput.value) ){
    return alert("Endodometer is empty or smaller than startodometer!");
  }
  if(this.isBusinessTrip == true){
    if(projectNameInput.value == ""){
      return alert("Projectname is empty!");
    }
    if(customerNameInput.value == ""){
       return alert("Customername is empty!");
    }
  }
  if(startDateInput.value == ""){
    return alert("Startdate is empty!");
  }
  if(endDateInput.value == "" || new Date(startDateInput.value) > new Date(endDateInput.value)){
    return alert("Enddate is empty or bigger than startdate!");
  }

  //Convert var
  const startDateConvert = new Date(startDateInput.value);
  const endDateConvert = new Date(endDateInput.value);


  // Build Trip Object
  this.newWaypointStart.gpsLat = this.startlat;
  this.newWaypointStart.gpsLon = this.startlon;
  this.newWaypointEnd.gpsLat = this.endlat;
  this.newWaypointEnd.gpsLon = this.endlon;
  this.newTrip.startOdometer = parseInt(startOdometerInput.value);
  this.newTrip.endOdometer = parseInt(endOdometerInput.value);
  if(this.isBusinessTrip){
    this.newTrip.projectName = projectNameInput.value;
    this.newTrip.customerName = customerNameInput.value;
  }
  this.newTrip.startDate = startDateConvert;
  this.newTrip.endDate = endDateConvert;
  this.newTrip.startWaypoint = this.newWaypointStart;
  this.newTrip.endWaypoint = this.newWaypointEnd;
  this.newTrip.isBusiness = this.isBusinessTrip;



  console.log(this.newTrip);
  this.createTripService.addTrip(this.newTrip);
  this.router.navigate([HOME_PATH]);
  }

  // Back to the site
  goBack() {
    this._location.back();
  }

  ngOnInit() {
  }
}
