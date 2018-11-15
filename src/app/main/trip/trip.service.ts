import { Injectable } from '@angular/core';
import { Trip } from "../entitys/trip";
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TripService {


  
  private tripsURL = 'api/trips';
  private secondURL = 'http://ip.jsontest.com/';

  getTrips(): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.tripsURL)
    
  }

  
  getTrip(id: number): Observable<Trip> {
  const url = `${this.tripsURL}/${id}`;
  return this.http.get<Trip>(url);
  }

  constructor(
    private http: HttpClient) { }
}
//