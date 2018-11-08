import { Injectable } from '@angular/core';
import { Trip } from "./trip";
import { Trips } from "./mock-trips";
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  getTrips(){
    return this.http.get("https://my-json-server.typicode.com/Brma1048/fahrtdaten")
  }


  constructor(private http: HttpClient) { }
}
