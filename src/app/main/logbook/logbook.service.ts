import { Injectable } from '@angular/core';
import { Logbook } from "../entitys/logbook";
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LogbookService {

  //private logbooksURL = 'http://localhost:8080/logbook';
  private logbooksURL = "api/logbooks";

  getLogbooks(): Observable<Logbook[]>{
    return this.http.get<Logbook[]>(this.logbooksURL)
  }

  getLogbook(id: number): Observable<Logbook> {
    const url = `${this.logbooksURL}/${id}`;
    return this.http.get<Logbook>(url);
    }

  constructor(private http: HttpClient) { }
}
