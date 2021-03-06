import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { KeycloakService } from '../../keycloak.service';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Driver } from '../entities/driver';
import { Router } from '@angular/router';

// Redirect-Path
export const HOME_PATH = 'dashboard';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  // Create a Driver
  createDriver(driver: Driver){
    const token = this.keycloakService.getToken();
    return this.http.post('http://localhost:8080/createDriver',driver, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    }).subscribe(
      res => {
        console.log()
        alert("The driver was saved successfully!");
        this.router.navigate([HOME_PATH]);
      },
      (err: HttpErrorResponse) => {
        alert("There was an error!");
        if (err.error instanceof Error) {
          console.log('Client Side Error: ', err.error.message);
        } else {
          console.log('Server Side Error: ', err.error.message);
        }
      }
    );
  }

// Create a User in KeyCloak
createUser(test,driver: Driver){
  console.log(test);
  const token = this.keycloakService.getToken();
  return this.http.post('http://localhost:8081/auth/admin/realms/demo/users', test, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token 
    })
  })
  .subscribe(
    res => {
      console.log(res);
      this.createDriver(driver);
    },  
    (err: HttpErrorResponse) => {
      alert("There was an error!");
      if (err.error instanceof Error) {
        console.log('Client Side Error: ', err.error.message);
      } else {
        console.log('Server Side Error: ', err.error.message);
      }
    });
  }

  constructor(
    private keycloakService: KeycloakService,
    private router: Router,
    private http: HttpClient
  ) { }
}
