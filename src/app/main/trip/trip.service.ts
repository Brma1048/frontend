import { Injectable } from '@angular/core';
import { Trip } from "./trip";
import { Trips } from "./mock-trips";
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  
  private tripsURL = 'api/trips';

  getTrips(): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.tripsURL)
    
  }


  constructor(private http: HttpClient) { }
}
