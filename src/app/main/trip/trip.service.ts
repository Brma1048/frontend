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


  // URI-Links
  private tripsURL = 'http://localhost:8080/trip';
  private personaltripsURL = 'http://localhost:8080/myTrip';
  private personaltripsIdURL = 'http://localhost:8080/mytrip';
  private unconfirmedtripsURL = 'http://localhost:8080/mytrips/unconfirmed';


  // get my unconfirmed trips [Employee]
  getMyUnconfirmedTrips(mail: string): Observable<Trip[]>{
    const token = this.keycloakService.getToken();
    const url = `${this.unconfirmedtripsURL}`;
    return this.http.get<Trip[]>(url,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  // get my trips by id [Employee]
  getMyTripById(id: number): Observable<Trip> {
    const token = this.keycloakService.getToken();
    const url = `${this.personaltripsIdURL}/${id}`;
    return this.http.get<Trip>(url,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  // get my trips [Employee]
  getMyTrips(mail: string): Observable<Trip[]>{
    const token = this.keycloakService.getToken();
    const url = `${this.personaltripsURL}`;
    return this.http.get<Trip[]>(url,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  //get all trips [Manager]
  getTrips(): Observable<Trip[]>{
    const token = this.keycloakService.getToken();
    return this.http.get<Trip[]>(this.tripsURL,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  //get all trips of a logbook [Manager]
  getLogbookTrips(id: string): Observable<Trip[]>{
    const token = this.keycloakService.getToken();
    const url = `${this.tripsURL}/logbook/${id}`;
    return this.http.get<Trip[]>(url,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  // get a trip by id [Employee/Manager]
  getTrip(id: number): Observable<Trip> {
    const token = this.keycloakService.getToken();
    const url = `${this.tripsURL}/${id}`;
    return this.http.get<Trip>(url,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }
  
  // get trips by driver name [Manager]
  getTripsByDriverName(name: string): Trip[]{
    return data.filter(t => t.driver.lastName === name);
  }

  // get trips by driver id [Manager/Emloyee]
  getTripsByDriverID(id: string): Observable<Trip[]>{
    const token = this.keycloakService.getToken();
    const url = `${this.tripsURL}/driver/email/${id}`;
    return this.http.get<Trip[]>(url,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  // get trips by customer name [Manager]
  getTripsByCustomerName(name: string): Observable<Trip[]>{
    const token = this.keycloakService.getToken();
    const url = `${this.tripsURL}/customername/${name}`;
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