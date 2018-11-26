import { Injectable, ErrorHandler } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse }    from '@angular/common/http';
import { Trip, TripResponse } from '../entities/trip';




@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private tripsUrl = 'http://localhost:8080/logbook';

  geoCode() {
    var location = "Rastatterstraße 77a Karlsruhe"
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?', {
      params: {
        address: location,
        key: 'AIzaSyDpol0dABhIMEpa56as8N556eEbYjiq-D0'

      }
    })
    .subscribe(function(response){
      console.log(response);
    })
  }

  addTrip (trip: Trip){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', trip, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .subscribe(
      res => {
        console.log(res)
      },
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          console.log("Client Side Error: ", err.error.message)
        } else {
          console.log("Server Side Error: ", err.error.message)
        }
      }
    )
  }

  constructor(private http: HttpClient) { }
}

