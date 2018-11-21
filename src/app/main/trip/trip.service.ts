import { Injectable } from '@angular/core';
import { Trip } from "../entities/trip";
import { Observable, of, from } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TripService {


  private tripsURL = 'http://localhost:8080/logbook';
  //private tripsURL = 'api/logbooks';
  private secondURL = 'http://ip.jsontest.com/';

  getTrips(): Observable<Trip[]>{
    const data = this.http.get<Trip[]>(this.tripsURL)
    return data;
    
  }
  getLogbookTrips(id: number): Observable<Trip[]>{
    const url = `${this.tripsURL}/${id}`;
    return this.http.get<Trip[]>(url)
  }
//

  getTrip(id: number): Observable<Trip> {
  const url = `${this.tripsURL}/${id}`;
  return this.http.get<Trip>(url);
  }

  constructor(
    private http: HttpClient) { }
}
//