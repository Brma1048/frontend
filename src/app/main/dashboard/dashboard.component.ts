import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip/trip.service';
import { Trip } from '../entities/trip';
import { KeycloakService } from '../../keycloak.service';
import { DashboardService } from './dashboard.service';
import { isString } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  uctrips: Trip[];

  ismanager: string;

  userindata: boolean;

  alllogbooks: string;
  alltrips: string;
  allprivattrips: string;
  allbusinesstrips: string;
  mytrips: string;
  myprivatetrips: string;
  mybusinesstrips: string;
  myodometer: string;

//Dashboard FUnktionen
  countAllLogbooks(): void{
    if(this.ismanager != "manager"){return}
    this.dashboardService.countAllLogbooks().subscribe(
      res => {
        this.alllogbooks = res.toString();
        //alert(this.alllogbooks);
      }
    );
  }

  countAllTrips(): void{
    if(this.ismanager != "manager"){return}
    this.dashboardService.countAllTrips().subscribe(
      res => {
        this.alltrips = res.toString();
        //alert(this.alltrips);
      }
    );
  }
  countAllPrivatTrips():void{
    if(this.ismanager != "manager"){return}
    this.dashboardService.countAllPrivatTrips().subscribe(
      res =>{
        this.allprivattrips = res.toString();
        //alert(this.allprivattrips);
      }
    )
  }
  countAllBusinessTrips():void{
    if(this.ismanager != "manager"){return}
    this.dashboardService.countAllBusinessTrips().subscribe(
      res =>{
        this.allbusinesstrips = res.toString();
        //alert(this.allbusinesstrips);
      }
    )
  }



  countMyTrips():void{
    if(this.ismanager == "manager"){return}
    this.dashboardService.countMyTrips().subscribe(
      res => {
        this.mytrips = res.toString();
        (this.mytrips);
      },
      error =>{
        this.mytrips = "0";
      }
    )
  }
  countMyPrivateTrips():void{
    if(this.ismanager == "manager"){return}
    this.dashboardService.countMyPrivateTrips().subscribe(
      res => {
        this.myprivatetrips = res.toString();
        //alert(this.myprivatetrips);
      }
      ,
      error =>{
        this.myprivatetrips = "0";
      }
    )
  }
  countMyBusinessTrips():void{
    if(this.ismanager == "manager"){return}
    this.dashboardService.countMyBusinessTrips().subscribe(
      res => {
        this.mybusinesstrips = res.toString();
        //alert(this.mybusinesstrips);
      },
      error =>{
        this.mybusinesstrips = "0";
      }
    )
  }
  countMyOdometer():void{
    if(this.ismanager == "manager"){return}
    this.dashboardService.countMyOdometer().subscribe(
      res => {
        this.myodometer = res.toString();
        //alert(this.myodometer);
      },
      error =>{
        this.myodometer = "0";
      }
    )
  }


  informUser(): void{
    if(this.uctrips != null){
      alert("You have unconfirmed trips!");
    }
  }

  getMyUnconfirmedTrips(): void{
    if(this.ismanager == "manager") {return;}
    this.uctrips = null;
    this.tripService.getMyUnconfirmedTrips(this.keycloakService.getUserMail())
        .subscribe(trips => this.uctrips = trips,
          () => (console.log("no unconfirmed trips")),
          () => (this.informUser())
          );
  }

  constructor(
    private tripService: TripService,
    private keycloakService: KeycloakService,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.ismanager = this.keycloakService.getUserRole();
     
    this.userindata = this.keycloakService.userindata;

    this.countAllLogbooks();
    this.countAllTrips();
    this.countMyTrips();
    this.countMyPrivateTrips();
    this.countMyBusinessTrips();
    this.countMyOdometer();
    this.countAllPrivatTrips();
    this.countAllBusinessTrips();


    this.getMyUnconfirmedTrips();
  }

}//
