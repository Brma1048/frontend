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

  // Meta
  uctrips: Trip[];

  ismanager: string;

  userindata: boolean;

  // Strings for Dashboard
  alllogbooks: string;
  alltrips: string;
  allprivattrips: string;
  allbusinesstrips: string;
  mytrips: string;
  myprivatetrips: string;
  mybusinesstrips: string;
  myodometer: string;

  // Count all logbooks [Manager]
  countAllLogbooks(): void{
    if(this.ismanager != "manager"){return}
    this.dashboardService.countAllLogbooks().subscribe(
      res => {
        this.alllogbooks = res.toString();
      }
    );
  }

  // Count all trips [Manager]
  countAllTrips(): void{
    if(this.ismanager != "manager"){return}
    this.dashboardService.countAllTrips().subscribe(
      res => {
        this.alltrips = res.toString();
      }
    );
  }

  // Count all privat trips [Manager]
  countAllPrivatTrips():void{
    if(this.ismanager != "manager"){return}
    this.dashboardService.countAllPrivatTrips().subscribe(
      res =>{
        this.allprivattrips = res.toString();
      }
    )
  }

  // Count all business trips [Manager]
  countAllBusinessTrips():void{
    if(this.ismanager != "manager"){return}
    this.dashboardService.countAllBusinessTrips().subscribe(
      res =>{
        this.allbusinesstrips = res.toString();
      }
    )
  }

  // Count my trips [Employee]
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

  // Count my private trips [Employee]
  countMyPrivateTrips():void{
    if(this.ismanager == "manager"){return}
    this.dashboardService.countMyPrivateTrips().subscribe(
      res => {
        this.myprivatetrips = res.toString();
      }
      ,
      error =>{
        this.myprivatetrips = "0";
      }
    )
  }

  // Count my business trips [Employee]
  countMyBusinessTrips():void{
    if(this.ismanager == "manager"){return}
    this.dashboardService.countMyBusinessTrips().subscribe(
      res => {
        this.mybusinesstrips = res.toString();
      },
      error =>{
        this.mybusinesstrips = "0";
      }
    )
  }

  // Count my total distance [Employee]
  countMyOdometer():void{
    if(this.ismanager == "manager"){return}
    this.dashboardService.countMyOdometer().subscribe(
      res => {
        this.myodometer = res.toString();
      },
      error =>{
        this.myodometer = "0";
      }
    )
  }


  // Inform user about unconfirmed trip
  informUser(): void{
    if(this.uctrips != null){
      alert("You have unconfirmed trips!");
    }
  }

  // Check unconfirmed trips
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

}
