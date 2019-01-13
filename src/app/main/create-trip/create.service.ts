import { Injectable, ErrorHandler } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Trip, TripResponse } from '../entities/trip';
import { KeycloakService } from 'src/app/keycloak.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


export const HOME_PATH = 'dashboard';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private tripsUrl = 'http://localhost:8080/logbook';

  getGeoCodeStart(location: string) {

    return this.http.get('https://eu1.locationiq.com/v1/search.php?', {
      params: {
        format: 'json',
        q: location,
        key: 'pk.ffbc75ecb6b5956a8fb542a623e0f957'

      }
    })
    .subscribe(function(response) {
       const lat = response[0].lat;
       const lon = response[0].lon;
       
       const inputValueLatStart = (<HTMLInputElement>document.getElementById('gpsLatStart'));
       inputValueLatStart.value = lat;
       const inputValueLonStart = (<HTMLInputElement>document.getElementById('gpsLonStart'));
       inputValueLonStart.value = lon;
      
      console.log(response);
    });
  }

  getGeoCodeEnd(location: string) {

    return this.http.get('https://eu1.locationiq.com/v1/search.php?', {
      params: {
        format: 'json',
        q: location,
        key: 'pk.ffbc75ecb6b5956a8fb542a623e0f957'

      }
    })
    .subscribe(function(response) {
       const lat = response[0].lat;
       const lon = response[0].lon;
       
       const inputValueLatEnd = (<HTMLInputElement>document.getElementById('gpsLatEnd'));
       inputValueLatEnd.value = lat;
       const inputValueLonEnd = (<HTMLInputElement>document.getElementById('gpsLonEnd'));
       inputValueLonEnd.value = lon;
       
      console.log(response);
    });
  }

  /*
  geoCode(location: string) {
    //var location = "Rastatterstraße 77a Karlsruhe"
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?', {
      params: {
        address: location,
        key: 'AIzaSyD9HGra1QvpuJZHHsRi3mL5zeMgNwmv7kA'

      }
    })
    .subscribe(function(response){
      //let lat = response.data.results[0].geometry.location.lat;
      //let lon = response.data.results[0].geometry.location.lon;
      console.log(response);
    })
  }
  */

  // https://jsonplaceholder.typicode.com/posts
  private uctripsURL = 'http://localhost:8080/trip';
  updateTrip(trip: Trip,id: string){
    const token = this.keycloak.getToken();
    //const url = `${this.uctripsURL}/${id}`;
    const url = 'http://localhost:8080/mytrips/confirm';
    return this.http.put(url, trip, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    })
    .subscribe(
      res => {
        alert("Done!");
        this.router.navigate([HOME_PATH]);
      }
    )
  }
  addTrip (trip: Trip) {
    const token = this.keycloak.getToken();
    console.log(token);
    return this.http.post('http://localhost:8080/Trip', trip, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    })
    .subscribe(
      res => {
        console.log(res);
        alert("The trip was saved successfully!");
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client Side Error: ', err.error.message);
        } else {
          console.log('Server Side Error: ', err.error.message);
        }
      }
    );
  }

  constructor(private http: HttpClient,
              private keycloak: KeycloakService,
              private router: Router,
              public _location: Location) { } // Test Header für Token
}

