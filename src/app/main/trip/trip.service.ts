import { Injectable } from '@angular/core';
import { Trip } from "../entitys/trip";
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  
  private tripsURL = 'api/trips';
  private secondURL = 'http://ip.jsontest.com/';

  getTrips(): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.tripsURL)
    
  }


  constructor(private http: HttpClient) { }
}
