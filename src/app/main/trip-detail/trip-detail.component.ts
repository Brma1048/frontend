import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WayPoints } from "../entities/waypoints";
import { TripService } from '../trip/trip.service';
import { NewTrip } from '../entities/newTrip';


@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  trip: NewTrip;
  mapsrctest: HTMLImageElement;
  marker: string;
  latm1: number;
  lonm1: number;
  latm2: number;
  lonm2: number;
  newWaypointStart: WayPoints = new WayPoints;


  getTrip(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.tripService.getMyTripById(id)
        .subscribe(trip => this.trip = trip);
  }



  // Put Waypoints from Trip to Var
  getTripForMap(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.tripService.getMyTripById(id)
        .subscribe((res)  => { this.latm1 = res.startWaypoint.gpsLat,
                               this.lonm1 = res.startWaypoint.gpsLon,
                               this.latm2 = res.endWaypoint.gpsLat,
                               this.lonm2 = res.endWaypoint.gpsLon,
                               this.setMapSrc();});
  }


  // Set URL for the static Map
  setMapSrc():void {
    this.mapsrctest = document.getElementById('mapsrc') as HTMLImageElement;
    this.mapsrctest.src = "https://maps.locationiq.com/v2/staticmap?key=pk.ffbc75ecb6b5956a8fb542a623e0f957&center=" + this.latm1.toString() + "," + this.lonm1.toString() + "&zoom=10&size=480x480&markers=" + this.latm1.toString() + "," + this.lonm1.toString() +"|icon:large-red-cutout&markers= " + this.latm2.toString() + "," + this.lonm2.toString() + "|icon:large-blue-cutout";
  }


  constructor(
    private route: ActivatedRoute,
    private tripService: TripService) { }

  ngOnInit(): void {
    this.getTrip();
    this.getTripForMap();
    this.setMapSrc();
  }
}
