import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NewTrip} from '../entities/newTrip';
import { Trip} from '../entities/trip';
import { KeycloakService } from 'src/app/keycloak.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


export const HOME_PATH = 'dashboard';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  // private tripsUrl = 'http://localhost:8080/logbook';

  // Get Start Geodates from LocationIQ
  getGeoCodeStart(location: string) {
    return this.http.get('https://eu1.locationiq.com/v1/search.php?', {
      params: {
        format: 'json',
        q: location,
        key: 'pk.ffbc75ecb6b5956a8fb542a623e0f957'

      }
    });   
  }


  // Get End Geodates from LocationIQ
  getGeoCodeEnd(location: string) {
    return this.http.get('https://eu1.locationiq.com/v1/search.php?', {
      params: {
        format: 'json',
        q: location,
        key: 'pk.ffbc75ecb6b5956a8fb542a623e0f957'

      }
    });
  }


  //  Test API https://jsonplaceholder.typicode.com/posts
  // private uctripsURL = 'http://localhost:8080/trip';
  updateTrip(trip: Trip,id: string){
    const token = this.keycloak.getToken();
    const url = 'http://localhost:8080/mytrips/confirm';
    return this.http.put(url, trip, {
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

  // Send Trip to Backend
  addTrip (trip: NewTrip) {
    const token = this.keycloak.getToken();
    console.log(token);
    return this.http.post('http://localhost:8080/createTrip', trip, {
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

  constructor(private http: HttpClient,
              private keycloak: KeycloakService,
              private router: Router,
              public _location: Location) { } 
}

