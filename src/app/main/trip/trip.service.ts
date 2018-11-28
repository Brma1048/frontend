import { Injectable } from '@angular/core';
import { Trip } from "../entities/trip";
import { Observable, of, from } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';



declare var require: any

const data : Trip[] = require("../mocks/trip-mock.json");

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TripService {


  private tripsURL = 'http://localhost:8080/trip/';
  //private tripsURL = 'api/logbooks';
  private secondURL = 'http://ip.jsontest.com/';

  getTrips(): Observable<Trip[]>{
    //return data;
    return this.http.get<Trip[]>(this.tripsURL);
    
  }
  getLogbookTrips(id: number): Observable<Trip[]>{
    //return data.filter(t => t.logbookid === id);
    const url = `${this.tripsURL}/logbook/${id}`;
    return this.http.get<Trip[]>(url);
  }

  getTrip(id: number): Observable<Trip> {
    //return data.find(t => t.id == id);
    const url = `${this.tripsURL}/${id}`;
    return this.http.get<Trip>(url);
  }
  
  getTripsByDriverName(name: string): Trip[]{
    return data.filter(t => t.driver.name === name);
  }

  getTripsByDriverID(id: number): Observable<Trip[]>{
    const url = `${this.tripsURL}/driver/${id}`;
    return this.http.get<Trip[]>(url);
  }

  constructor(
    private http: HttpClient) { }
}