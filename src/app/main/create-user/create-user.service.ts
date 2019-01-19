import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { KeycloakService } from '../../keycloak.service';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {


  createUser(user: User){
    const token = this.keycloakService.getToken();
    return this.http.post('http://localhost:8080/admin/realms/demo/users', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    })
    .subscribe(
      res => {
        console.log(res);
        alert("The trip was saved successfully!");
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client Side Error: ', err.error.message);
        } else {
          console.log('Server Side Error: ', err.error.message);
        }
      }
    );
  }

  constructor(
    private keycloakService: KeycloakService,
    private http: HttpClient
  ) { }
}
