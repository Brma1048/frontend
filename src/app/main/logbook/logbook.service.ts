import { Injectable } from '@angular/core';
import { Logbook } from "../entities/logbook";
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

declare var require: any

const data : Logbook[] = require("../mocks/logbook-mock.json");

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LogbookService {

  private logbooksURL = 'http://localhost:8080/logbook';
  //private logbooksURL = 'api/logbooks';


  /*getLogbooks(): Observable<Logbook[]>{
    return this.http.get<Logbook[]>(this.logbooksURL)
  }*/
  getLogbooks(): Logbook[]{
    alert(data);
    return data;
  }

  getLogbook(id: number): Observable<Logbook> {
    const url = `${this.logbooksURL}/${id}`;
    return this.http.get<Logbook>(url);
    }

  constructor(private http: HttpClient) { }
}
