import { Injectable } from '@angular/core';
import { Trip } from "../entities/trip";
import { Observable, of, from } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


declare var require: any

const data : Trip[] = require("../mocks/trip-mock.json");

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
    return null;
    
  }
  getLogbookTrips(id: string): Trip[]{
    //return data.find(t => t.logbookid == id);
    return data.filter(t => t.logbookid === id);
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