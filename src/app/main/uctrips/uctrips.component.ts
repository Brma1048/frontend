import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../entities/trip';
import { TripService} from "../trip/trip.service";
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Logbook } from '../entities/logbook';
import { LogbookService } from '../logbook/logbook.service';
import { KeycloakService } from '../../keycloak.service';

@Component({
  selector: 'app-uctrips',
  templateUrl: './uctrips.component.html',
  styleUrls: ['./uctrips.component.css']
})
export class UctripsComponent implements OnInit {

  uctrips : Trip[];

  getMyUnconfirmedTrips(): void{
    this.uctrips = null;
    this.tripService.getMyUnconfirmedTrips(this.keycloakService.getUserMail())
        .subscribe(trips => this.uctrips = trips
          //() => (this.checkergebnisse()),
          //() => (this.checkergebnisse())
          );
  }
  showMyUnconfirmedTrips():void{
    this.getMyUnconfirmedTrips();
  }

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute,
    private location: Location,
    private logbookService: LogbookService,
    private keycloakService: KeycloakService
    ) { }

  ngOnInit() {
    this.showMyUnconfirmedTrips();
  }
//
}
