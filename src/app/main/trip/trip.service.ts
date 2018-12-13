import { Injectable } from '@angular/core';
import { Trip } from "../entities/trip";
import { Observable, of, from } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';
import { KeycloakService } from 'src/app/keycloak.service';



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
    const token = this.keycloakService.getToken();
    alert(token);
    return this.http.get<Trip[]>(this.tripsURL,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }
  getLogbookTrips(id: string): Observable<Trip[]>{
    //return data.filter(t => t.logbookid === id);
    const token = this.keycloakService.getToken();
    const url = `${this.tripsURL}/logbook/${id}`;
    return this.http.get<Trip[]>(url,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  getTrip(id: number): Observable<Trip> {
    //return data.find(t => t.id == id);
    const token = this.keycloakService.getToken();
    const url = `${this.tripsURL}/${id}`;
    return this.http.get<Trip>(url,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }
  
  getTripsByDriverName(name: string): Trip[]{
    return data.filter(t => t.driver.name === name);
  }

  getTripsByDriverID(id: string): Observable<Trip[]>{
    const token = this.keycloakService.getToken();
    const url = `${this.tripsURL}/driver/${id}`;
    return this.http.get<Trip[]>(url,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  getTripsByCustomerName(name: string): Observable<Trip[]>{
    const token = this.keycloakService.getToken();
    const url = `${this.tripsURL}/customer/${name}`;
    return this.http.get<Trip[]>(url,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  constructor(
    private http: HttpClient,
    private keycloakService: KeycloakService) { }
}