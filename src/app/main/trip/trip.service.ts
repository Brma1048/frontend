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
  getLogbookTrips(id: string): Trip[]{
    //return data.find(t => t.logbookid == id);
    return data.filter(t => t.logbookid === id);
  }

  getTrip(id: string): Trip {
    return data.find(t => t.id == id);
  }
  
  getTripByDriverName(name: string): Trip[]{
    return data.filter(t => t.driver.name === name);
  }

  constructor(
    private http: HttpClient) { }
}