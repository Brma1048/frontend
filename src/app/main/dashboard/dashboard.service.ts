import { Injectable } from '@angular/core';
import { KeycloakService } from '../../keycloak.service';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

 // Manager
  countAllLogbooks(){
    const token = this.keycloakService.getToken();
    const url = 'http://localhost:8080/countAllLogbooks';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  countAllTrips(){
    const token = this.keycloakService.getToken();
    const url = 'http://localhost:8080/countAllTrips';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }
  countAllPrivatTrips(){
    const token = this.keycloakService.getToken();
    const url = 'http://localhost:8080/countAllPrivatTrips';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }
  countAllBusinessTrips(){
    const token = this.keycloakService.getToken();
    const url = 'http://localhost:8080/countAllBusinessTrips';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }


  // User
  countMyTrips(){
    const token = this.keycloakService.getToken();
    const url = 'http://localhost:8080/countMyTrips';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  countMyPrivateTrips(){
    const token = this.keycloakService.getToken();
    const url = 'http://localhost:8080/countMyPrivatTrips';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }


  countMyBusinessTrips(){
    const token = this.keycloakService.getToken();
    const url = 'http://localhost:8080/countMyBusinessTrips';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }

  countMyOdometer(){
    const token = this.keycloakService.getToken();
    const url = 'http://localhost:8080/countMyOdometer';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    });
  }
  constructor(
    private keycloakService: KeycloakService,
    private http: HttpClient
  ) { }
}
