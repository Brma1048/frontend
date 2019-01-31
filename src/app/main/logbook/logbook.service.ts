import { Injectable } from '@angular/core';
import { Logbook } from '../entities/logbook';
import { Driver } from '../entities/driver';
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { KeycloakService } from 'src/app/keycloak.service';
import { Router } from '@angular/router';

declare var require: any;

// Redirect-Path
export const HOME_PATH = 'dashboard';

// Meta
const data: Logbook[] = require('../mocks/logbook-mock.json');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LogbookService {

  // URI-Links
  private logbooksURL = 'http://localhost:8080/logbook';
  private driverURL = 'http://localhost:8080/driver';
  private personallogbooksURL = 'http://localhost:8080/myLogbook';
  
  // get driver by e-mail [Manager]
  getDriver(email: string){
    const token = this.keycloakService.getToken();
    const url = `${this.driverURL}/${email}`;
    return this.http.get<Driver>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  // update a logbook [Manager]
  updateLogbook(logbook: Logbook){
    const token = this.keycloakService.getToken();
    //const url = `${this.uctripsURL}/${id}`;
    const url = 'http://localhost:8080/assignDriver/logbook';
    return this.http.put(url, logbook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    })
    .subscribe(
      res => {
        alert("Done!");
        this.router.navigate([HOME_PATH]);
      }
    )
  }

  // get my logbooks [Employee]
  getMyLogbooks(): Observable<Logbook> {
    const token = this.keycloakService.getToken();
    return this.http.get<Logbook>(this.personallogbooksURL,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  // get all logbooks [Manager]
  getLogbooks(): Observable<Logbook[]> {
    const token = this.keycloakService.getToken(); 
    return this.http.get<Logbook[]>(this.logbooksURL,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  // get logbook by id [Manager]
  getLogbook(id: string): Observable<Logbook> {
    const token = this.keycloakService.getToken();
    const url = `${this.logbooksURL}/${id}`;
    return this.http.get<Logbook>(url,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  // get logbook by driver last name [Manager]
  getLogbookByDriverLastName(name: string): Observable<Logbook> {
    const url = `${this.logbooksURL}/name/${name}`;
    return this.http.get<Logbook>(url);

  }
  constructor(
    private router: Router,
    private http: HttpClient,
    private keycloakService: KeycloakService) { }
}
