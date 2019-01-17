import { Injectable } from '@angular/core';
import { KeycloakService } from 'src/app/keycloak.service';
import { Logbook } from '../entities/logbook';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class CreateLogbookService {

  createLogbook(logbook: Logbook){
    const token = this.keycloakService.getToken();
    return this.http.post('http://localhost:8080/createLogbook', logbook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    })
    .subscribe(
      res => {
        console.log(res);
        alert("The Logbook was saved successfully!");
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client Side Error: ', err.error.message);
        } else {
          console.log('Server Side Error: ', err.error.message);
          alert("The Server is not avaible!");
        }
      }
    );
  }

  constructor(
    private router: Router,
    public _location: Location,
    private http: HttpClient,
    private keycloakService: KeycloakService) { }
}
