import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  geoCode() {
    var location = "Rastatterstraße 77a Karlsruhe"
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?', {
      params: {
        address: location,
        key: 'AIzaSyDpol0dABhIMEpa56as8N556eEbYjiq-D0'

      }
    })
    .subscribe(function(response){
      console.log(response);
    })
  }

  constructor(private http: HttpClient) { }
}
